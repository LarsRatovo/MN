<?php

namespace App\Http\Controllers;

use App\Models\Provider;
use Illuminate\Http\Request;

class ProviderController extends Controller
{
    public function save(Request $request)
    {
        return Provider::create(json_decode($request->getContent(),true));
    }
    public function paginate(){
        return Provider::simplePaginate(10);
    }
    public function search(Request $request){
        $name="%".$request->get("name")."%";
        return Provider::where("name","ilike",$name)->orWhere("surname","ilike",$name)->get();
    }
    public function update(Request $request){
        $arr=json_decode($request->getContent(),true);
        return Provider::where('id',$arr['id'])->update($arr);
    }
}
