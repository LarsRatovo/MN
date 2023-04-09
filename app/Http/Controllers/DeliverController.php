<?php

namespace App\Http\Controllers;

use App\Models\Deliver;
use Illuminate\Http\Request;

class DeliverController extends Controller
{
    function save(Request $request){
        $deliver=new Deliver();
        $deliver->fill(json_decode($request->getContent(),true));
        $deliver->save();
        return $deliver;
    }
    function paginate(){
        return Deliver::Simplepaginate(10);
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
