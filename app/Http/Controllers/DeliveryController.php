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
        error_log(json_encode($arr));
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
        $provider->deliveries=$provider->deliveries()->where(\DB::raw("DATE(date_delivery)"),"=",$date)->get();
        return $provider;
    }
    function get_provider_deliveries($date){
        if($date==null){
            $date=new \Date();
        }
        $data=\DB::select("SELECT p.* FROM provider p JOIN (SELECT DISTINCT provider FROM delivery WHERE DATE(date_delivery)=?) ids ON p.id=ids.provider",[$date]);
        $providers=array();
        foreach ($data as $provider){
            $p=new Provider();
            $p->fill(json_decode(json_encode($provider),true));
            $p->deliveries=$p->deliveries()->where(\DB::raw("DATE(date_delivery)"),"=",$date)->orderBy("id")->get();
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
            $p->deliveries=$p->deliveries()->where(\DB::raw("DATE(date_delivery)"),"=",$date)->orderBy("id")->get();
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
        $deliveries=$deliver->deliveries=$deliver->deliveries()->where(\DB::raw("DATE(date_delivery)"),"=",$date)->get();
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
        $this->fpdf->SetFont('Arial');
        $this->fpdf->AddPage("L");
        $this->fpdf->Write(12,"Emploi du temps");
        $this->fpdf->Ln();
        $this->fpdf->Write(12,$data['deliver']['surname']);
        $this->fpdf->Ln();
        $this->fpdf->Write(12,$data['deliver']['name']);
        $this->fpdf->Ln();
        error_log(json_encode($data['deliveries']));
        $this->fpdf->Cell(40,12,"Ref",1);
        $this->fpdf->Cell(40,12,"Lieu",1);
        $this->fpdf->Cell(40,12,"Heure",1);
        $this->fpdf->Cell(40,12,"Contact",1);
        $this->fpdf->Cell(40,12,"Type",1);
        $this->fpdf->Cell(40,12,"Total",1);
        $this->fpdf->Cell(40,12,"Observation",1);
        $this->fpdf->Ln();
        foreach ($data['deliveries'] as $delivery){
            $this->fpdf->Cell(40,12,$delivery['ref'],1);
            $this->fpdf->Cell(40,12,$delivery['place'],1);
            $this->fpdf->Cell(40,12,date("H:i",strtotime($delivery['date_delivery'])),1);
            $this->fpdf->Cell(40,12,$delivery['contact'],1);
            $this->fpdf->Cell(40,12,$delivery['type'],1);
            $this->fpdf->Cell(40,12,$delivery['price']+$delivery['fee'],1);
            $this->fpdf->Cell(40,12,$delivery['observation'],1);
            $this->fpdf->Ln();
        }
        $this->fpdf->Output();
        exit;
    }
}
