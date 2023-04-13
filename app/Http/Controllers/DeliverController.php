<?php

namespace App\Http\Controllers;

use App\Models\Deliver;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DeliverController extends Controller
{
    function save(Request $request){
        return Deliver::create(json_decode($request->getContent(),true));
    }
    function all():Response{
        return Inertia::render("Delivers",[
            "delivers"=>Deliver::select("*")->orderBy("id")->get()
        ]);
    }
    function update(Request $request){
        $arr=json_decode($request->getContent(),true);
        return Deliver::where("id",$arr['id'])->update($arr);
    }
    function search(Request $request){
        $name="%".$request->get("name")."%";
        return Deliver::where("name","ilike",$name)->orWhere("surname","ilike",$name)->get();

    }
}
