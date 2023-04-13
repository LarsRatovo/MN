<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ReportController extends Controller
{
    function of(Request $request):Response{
        $date=$request->get("date");
        if($date==null){
            $date=date("Y-m-d");
        }
        $deliveryController=new DeliveryController();
        $providers=$deliveryController->get_provider_deliveries($date);
        $report=\DB::select("SELECT * FROM report WHERE date=?",[$date]);
        $delivers=\DB::select("SELECT d.* FROM deliver d JOIN (SELECT deliver FROM calendar WHERE date_work=?) c ON d.id=c.deliver",[$date]);
        return Inertia::render("Report",[
            "date"=>$date,
            "providers"=>$providers,
            "report"=>$report,
            "delivers"=>$delivers
        ]);
    }
    function ofName(Request $request):Response{
        $date=$request->get("date");
        $key=$request->get("key");
        if($date==null){
            $date=date("Y-m-d");
        }
        $deliveryController=new DeliveryController();
        $providers=$deliveryController->post_provider_deliveries($date,$key);
        $report=\DB::select("SELECT * FROM report WHERE date=?",[$date]);
        $delivers=\DB::select("SELECT d.* FROM deliver d JOIN (SELECT deliver FROM calendar WHERE date_work=?) c ON d.id=c.deliver",[$date]);
        return Inertia::render("Report",[
            "date"=>$date,
            "providers"=>$providers,
            "report"=>$report,
            "delivers"=>$delivers
        ]);
    }
}
