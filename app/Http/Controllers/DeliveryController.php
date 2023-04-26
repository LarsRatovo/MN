<?php

namespace App\Http\Controllers;

use App\Models\Deliver;
use App\Models\Delivery;
use App\Models\Provider;
use Codedge\Fpdf\Fpdf\Fpdf;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DeliveryController extends Controller
{
    protected $fpdf;
    /**
     * @throws \Exception
     */
    public function __construct()
    {
        $this->fpdf=new Fpdf;
    }

    function save(Request $request){
        $delivery=new Delivery();
        $provider=Provider::where("ref","ilike",$request->get("provider"))->get()->first();
        if($provider==null){
            $resp=new \Illuminate\Http\Response();
            $resp->setContent("Provider not found");
            $resp->setStatusCode(401);
            return $resp;
        }
        $delivery->fill(json_decode($request->getContent(),true));
        $delivery->provider=$provider->id;
        if($delivery->type=='R'){
            $delivery->ref=$delivery->owner->ref;
        }else{
            $max=\DB::select("SELECT COUNT(*) FROM delivery WHERE provider= ?  AND type='L' AND date(date_delivery)= ?",[
                $delivery->provider,
                Date($delivery->date_delivery)
            ])[0]->count;
            $delivery->ref=$delivery->owner->ref."-".$max;
        }
        $delivery->save();
        return $delivery;
    }
    function update(Request $request){
        $arr=json_decode($request->getContent(),true);
        Delivery::find($arr["id"])->update($arr);
        return Delivery::find($arr["id"]);
    }
    function remove($id){
        $delivery=Delivery::find($id);
        $delivery->delete();
        return $delivery;
    }
    function providers(Request $request,$id){
        $date=$request->get("date");
        $provider=Provider::find($id);
        $provider->deliveries=$provider->deliveries()->where(\DB::raw("DATE(date_delivery)"),"=",$date)->orderBy("date_delivery")->get();
        return $provider;
    }
    function get_provider_deliveries($date){
        if($date==null){
            $date=date("Y-m-d");
        }
        $data=\DB::select("SELECT p.* FROM provider p JOIN (SELECT DISTINCT provider FROM delivery WHERE DATE(date_delivery)=?) ids ON p.id=ids.provider",[$date]);
        $providers=array();
        foreach ($data as $provider){
            $p=new Provider();
            $p->fill(json_decode(json_encode($provider),true));
            $p->deliveries=$p->deliveries()->where(\DB::raw("DATE(date_delivery)"),"=",$date)->orderBy("date_delivery")->get();
            $providers[]=$p;
        }
        return $providers;
    }
    function post_provider_deliveries($date,$key){
        if($date==null){
            $date=new \Date();
        }
        $data=\DB::select("SELECT p.* FROM provider p JOIN (SELECT DISTINCT provider FROM delivery WHERE DATE(date_delivery)=?) ids ON p.id=ids.provider WHERE ref ilike ? OR name ilike ? or surname ilike ?",[$date,$key,'%'.$key.'%','%'.$key.'%']);
        $providers=array();
        foreach ($data as $provider){
            $p=new Provider();
            $p->fill(json_decode(json_encode($provider),true));
            $p->deliveries=$p->deliveries()->where(\DB::raw("DATE(date_delivery)"),"=",$date)->orderBy("date_delivery")->get();
            $providers[]=$p;
        }
        return $providers;
    }
    function provider_deliveries(Request $request):Response{
        $date=$request->get("date");
        $providers=$this->get_provider_deliveries($date);
        $delivers=\DB::select("SELECT d.* FROM deliver d JOIN (SELECT deliver FROM calendar WHERE date_work=?) c ON d.id=c.deliver",[$date]);
        return Inertia::render("Deliveries",[
            'providers'=>$providers,
            'delivers'=>$delivers
        ]);
    }
    function deliver_deliveries(Request $request){
        $date=$request->get("date");
        if($date==null){
            $date=date("Y-m-d");
        }
        $id=$request->get("id");
        $deliver=Deliver::find($id);
        $delivers=\DB::select("SELECT d.* FROM deliver d JOIN (SELECT deliver FROM calendar WHERE date_work=?) c ON d.id=c.deliver",[$date]);
        $deliveries=$deliver->deliveries=$deliver->deliveries()->where(\DB::raw("DATE(date_delivery)"),"=",$date)->orderBy("date_delivery")->get();
        return Inertia::render("DeliverReport",[
            "deliver"=>$deliver,
            "delivers"=>$delivers,
            "date"=>$date,
            "deliveries"=>$deliveries
        ]);
    }
    function load_deliver_deliveries(Request $request){
        $date=$request->get("date");
        if($date==null){
            $date=date("Y-m-d");
        }
        $delivers=\DB::select("SELECT d.* FROM deliver d JOIN (SELECT deliver FROM calendar WHERE date_work=?) c ON d.id=c.deliver",[$date]);
        return Inertia::render("DeliverReport",[
            "delivers"=>$delivers,
            "date"=>$date
        ]);
    }
    function toPdf(Request $request){
        $data=json_decode($request->get("data"),true);
        $this->fpdf->SetFont('Arial',"",10);
        $this->fpdf->AddPage("P");
        $this->fpdf->Write(10,"Emploi du temps");
        $this->fpdf->Ln();
        $this->fpdf->Write(10,$data['deliver']['surname']);
        $this->fpdf->Ln();
        $this->fpdf->Write(10,$data['deliver']['name']);
        $this->fpdf->Ln();
        $this->fpdf->Cell(30,10,"Ref",1);
        $this->fpdf->Cell(30,10,"Lieu",1);
        $this->fpdf->Cell(30,10,"Heure",1);
        $this->fpdf->Cell(30,10,"Contact",1);
        $this->fpdf->Cell(30,10,"Type",1);
        $this->fpdf->Cell(30,10,"Total",1);
        $this->fpdf->Cell(30,10,"Observation",1);
        $this->fpdf->Ln();
        foreach ($data['deliveries'] as $delivery){
            $this->fpdf->Cell(30,10,$delivery['ref'],1);
            $this->fpdf->Cell(30,10,$delivery['place'],1);
            $this->fpdf->Cell(30,10,date("H:i",strtotime($delivery['date_delivery'])),1);
            $this->fpdf->Cell(30,10,$delivery['contact'],1);
            $this->fpdf->Cell(30,10,$delivery['type'],1);
            $this->fpdf->Cell(30,10,$delivery['price']+$delivery['fee'],1);
            $this->fpdf->Cell(30,10,$delivery['observation'],1);
            $this->fpdf->Ln();
        }
        $this->fpdf->Output();
        exit;
    }
    function img(Request $request){
        $etat[0]="Annule";
        $etat[1]="Retour";
        $etat[2]="En cours";
        $etat[3]="Ok";
        $data=json_decode($request->get("data"),true);
        $height=100;
        foreach ($data["deliveries"] as $delivery){
            $height+=20;
        }
        $height+=100;
        $overlayImage = imagecreatefrompng('assets/img/header.png');
        $img=imagecreatetruecolor(994,$height);
        imagecopy($img,$overlayImage,0,0,0,0,994,100);
        $text_colour = imagecolorallocate( $img, 30,144,255);
        $back=imagecolorallocate($img,255,255,255);
        $text=imagecolorallocate($img,0,0,0);

        $color[0]=imagecolorallocate($img,239,122,122);
        $color[1]=imagecolorallocate($img,233,238,116);
        $color[2]=imagecolorallocate($img,255,255,255);
        $color[3]=imagecolorallocate($img,116,193,238);

        $font="assets/fonts/arial.ttf";
        imagettftext($img, 15, 0, 10, 20,$text_colour, $font,$data["ref"]);
        imagettftext($img, 15, 0, 10, 55,$text_colour, $font,$data["surname"]." ".$data["name"]);
        imagettftext($img, 15, 0, 10, 95,$text_colour, $font,$data["recovery"]);
        imagefilledrectangle ($img, 0, 100, 994, 130, $back);
        imagettftext($img, 11, 0, 10, 120,$text, $font,"Ref");
        imagettftext($img, 11, 0, 50, 120,$text, $font,"Lieu");
        imagettftext($img, 11, 0, 240, 120,$text, $font,"Contact");
        imagettftext($img, 11, 0, 350, 120,$text, $font,"Frais");
        imagettftext($img, 11, 0, 460, 120,$text, $font,"Prix");
        imagettftext($img, 11, 0, 570, 120,$text, $font,"Etat");
        imagettftext($img, 11, 0, 670, 120,$text, $font,"Obs");
        $y=140;
        $frais=0;
        $prix=0;
        foreach ($data["deliveries"] as $delivery){
            $prix+=$delivery['price'];
            if($delivery['stat']==1||$delivery['stat']==3){
                $frais+=($delivery['fee']*1000);
            }
            imagefilledrectangle ($img, 0, $y-15, 994, $y+5,$color[$delivery['stat']]);
            imagettftext($img, 10, 0, 10, $y,$text, $font,$delivery['ref']);
            imagettftext($img, 10, 0, 50, $y,$text, $font,$delivery['place']);
            imagettftext($img, 10, 0, 240, $y,$text, $font,$delivery['contact']);
            imagettftext($img, 10, 0, 350, $y,$text, $font,$delivery['fee']*1000);
            imagettftext($img, 10, 0, 460, $y,$text, $font,$delivery['price']);
            imagettftext($img, 10, 0, 570, $y,$text, $font,$etat[$delivery['stat']]);
            imagettftext($img, 10, 0, 670, $y,$text, $font,$delivery['observation']);
            $y+=20;
        }
        imagefilledrectangle ($img, 0, $y-15, 994, $y+65,$back);
        imagettftext($img, 10, 0, 10, $y,$text, $font,"Total frais : ".$frais." Ar");
        $y+=20;
        imagettftext($img, 10, 0, 10, $y,$text, $font,"Total prix : ".$prix." Ar");
        $y+=20;
        imagettftext($img, 10, 0, 10, $y,$text, $font,"Total : ".($prix+$frais)." Ar");
        header("Content-Type: image/png");
        imagepng($img);
        exit;
    }
}
