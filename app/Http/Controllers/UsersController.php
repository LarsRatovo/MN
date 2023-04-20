<?php

namespace App\Http\Controllers;

use App\Models\Tokens;
use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UsersController extends Controller
{
    /**
     * @throws \Exception
     */
    function login(Request $request){
        $username=$request->get("username");
        $password=$request->get("password");
        if($username!=null&&$password!=null){
            $password=md5($request->get("password"));
            $found=Users::where("username","=",$username)->where("password","=",$password)->get(["id"]);
            $current_date=date("Y-m-d");
            if(isset($found[0])){
                $token=Tokens::where("users","=",$found[0]->id)->where("valid","=",true)->where("begin_validation","<=",$current_date)->where("end_validation",">=",$current_date)->get();
                if(isset($token[0])){
                    return $token[0];
                }
                $token=new Tokens();
                $token->users=$found[0]->id;
                $token->token=md5("MNmnMN".$found[0]->username."AtMada".date("D, d M Y H:i:s"));
                $now=date("Y-m-d H:i:s");
                $token->begin_validation=$now;
                $token->end_validation=date("Y-m-d H:i:s",strtotime($now. ' + 3 days'));
                $token->save();
                return $token;
            }
        }
        $response=new Response();
        $response->setStatusCode(401);
        return $response;
    }
    function logout(Request $request){
        $token=$request->get("tk");
        $current_date=date("Y-m-d");
        $token=Tokens::where("token","=",$token)->where("valid","=",true)->where("begin_validation","<=",$current_date)->where("end_validation",">=",$current_date)->update([
            "valid"=>false
        ]);
    }
    static function check(Request $request):bool{
        $token=$request->get("tk");
        $current_date=date("Y-m-d");
        $token=Tokens::where("token","=",$token)->where("valid","=",true)->where("begin_validation","<=",$current_date)->where("end_validation",">=",$current_date)->get();
        return isset($token[0]);
    }
}
