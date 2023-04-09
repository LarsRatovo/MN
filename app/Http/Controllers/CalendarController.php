<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
    function save(Request $request){
        $calendar=new Calendar();
        $calendar->fill(json_decode($request->getContent(),true));
        if($calendar->date_work == null){
            $calendar->date_work=new \Date();
        }
        $calendar->save();
        return $calendar;
    }
    function paginate(Request $request){
        $date=$request->get("date");
        return Calendar::where("date_work","=",$date)->SimplePaginate(10);
    }
    function remove(Request $request){
        $arr=json_decode($request->getContent(),true);
        return Calendar::where("deliver","=",$arr['deliver'])->where("date_work","=",$arr['date_work'])->delete();
    }
}
