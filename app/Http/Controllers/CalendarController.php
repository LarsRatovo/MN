<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

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
    function all(Request $request):Response{
        $date=$request->get("date");
        if($date==null){
            $date=date("Y-m-d");
        }
        $calendar=\DB::select("SELECT d.*,c.deliver actif FROM deliver d LEFT JOIN (SELECT deliver FROM calendar WHERE date_work=?) c ON d.id=c.deliver",[$date]);
        return Inertia::render("Calendar",[
            "calendar"=>$calendar,
            "date"=>$date
        ]);
    }
    function remove(Request $request){
        $arr=json_decode($request->getContent(),true);
        return Calendar::where("deliver","=",$arr['deliver'])->where("date_work","=",$arr['date_work'])->delete();
    }
}
