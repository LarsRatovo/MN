<?php

namespace App\Http\Controllers;

use App\Models\Provider;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProviderController extends Controller
{
    public function save(Request $request)
    {
        return Provider::create(json_decode($request->getContent(),true));
    }
    public function all():Response{
        return Inertia::render("Providers",[
            "providers"=>Provider::select("*")->orderBy("id")->get()
        ]);
    }
    public function search(Request $request){
        $name="%".$request->get("name")."%";
        error_log("Name is ".$name);
        return Provider::where("name","ilike",$name)->orWhere("surname","ilike",$name)->orWhere("ref","ilike",$name)->orWhere("recovery","ilike",$name)->get();
    }
    public function update(Request $request){
        $arr=json_decode($request->getContent(),true);
        return Provider::where('id',$arr['id'])->update($arr);
    }
}
