<?php

namespace App\Http\Controllers;

use App\Models\Deliver;
use App\Models\Delivery;
use App\Models\Provider;
use Illuminate\Http\Request;

class DeliveryController extends Controller
{
    function save(Request $request){
        $delivery=new Delivery();
        $delivery->fill(json_decode($request->getContent(),true));
        if($delivery->type=='R'){
            $delivery->ref=$delivery->owner->ref;
        }else{
            $max=\DB::select("SELECT COUNT(*) FROM delivery WHERE provider= ? AND date(date_delivery)= ?",[
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
        $provider->deliveries=$provider->deliveries()->where(\DB::raw("DATE(date_delivery)"),"=",$date)->get();
        return $provider;
    }
    function provider_deliveries(Request $request){
        $date=$request->get("date");
        $data=\DB::select("SELECT p.* FROM provider p JOIN (SELECT DISTINCT provider FROM delivery WHERE DATE(date_delivery)=?) ids ON p.id=ids.provider",[$date]);
        $providers=array();
        foreach ($data as $provider){
            $p=new Provider();
            $p->fill(json_decode(json_encode($provider),true));
            $p->deliveries=$p->deliveries()->where(\DB::raw("DATE(date_delivery)"),"=",$date)->get();
            $providers[]=$p;
        }
        return $providers;
    }
    function deliver_deliveries($id,Request $request){
        $date=$request->get("date");
        $deliver=Deliver::find($id);
        $deliver->deliveries=$deliver->deliveries()->where(\DB::raw("DATE(date_delivery)"),"=",$date)->get();
        return $deliver;
    }
}
