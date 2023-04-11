<?php

namespace App\Http\Controllers;

use App\Models\Spent;
use Illuminate\Http\Request;

class   SpentController extends Controller
{
    function save(Request $request){
        return Spent::create(json_decode($request->getContent(),true));
    }
    function update(Request $request){
        $arr=json_decode($request->getContent());
        return Spent::where("deliver","=",$arr["id"])->where("date_spent","=",$arr["date_spent"])->update($arr);
    }
    function perDate(Request $request){
        return Spent::where("date_spent","=",$request->get("date_spent"))->get();
    }
    function perDateAndDeliver($id,Request $request){
        return Spent::where("date_spent","=",$request->get("date_spent"))->where("deliver","=",$id)->get();
    }
}
