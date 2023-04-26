<?php

namespace App\Http\Controllers;

use App\Models\Deliver;
use App\Models\Spent;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class   SpentController extends Controller
{
    function save(Request $request){
        try {
             return Spent::create(json_decode($request->getContent(),true));
        }catch (\Exception){
            $resp=new \Illuminate\Http\Response();
            $resp->setStatusCode(406);
            return $resp;
        }
    }
    function update(Request $request){
        $arr=json_decode($request->getContent(),true);
        unset($arr['owner']);
        return Spent::where("id","=",$arr["id"])->where("date_spent","=",$arr["date_spent"])->update($arr);
    }
    function load(Request $request){
        $date=$request->get("date");
        if($date==null){
            $date=date("Y-m-d");
        }
        $delivers=Deliver::all();
        $spent=Spent::where("date_spent","=",$date)->get();
        foreach ($spent as $p){
            $p->owner;
        }
        return Inertia::render("Spent",[
            "spents"=>$spent,
            "delivers"=>$delivers
        ]);
    }
    function perDateAndDeliver(Request $request){
        $id=$request->get("deliver");
        $date=$request->get("date");
        if($date==null){
            $date=date("Y-m-d");
        }
        $spent= Spent::where("date_spent","=",$date);
        if(!blank($id)){
            $spent=$spent->where("deliver","=",$id);
        }
        $delivers=Deliver::all();
        $spent=$spent->get();
        foreach ($spent as $p){
            $p->owner;
        }
        return Inertia::render("Spent",[
            "spents"=>$spent,
            "delivers"=>$delivers
        ]);
    }
}
