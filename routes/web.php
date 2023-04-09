<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::controller(\App\Http\Controllers\ProviderController::class)->group(function (){
    Route::post("/providers",'save');
    Route::get("/providers",'paginate');
    Route::put("/providers","update");
    Route::post("/providers/search","search");
});

Route::controller(\App\Http\Controllers\DeliverController::class)->group(function (){
    Route::post("/delivers",'save');
    Route::get("/delivers",'paginate');
    Route::put("/delivers","update");
    Route::post("/delivers/search","search");
});

Route::controller(\App\Http\Controllers\CalendarController::class)->group(function (){
    Route::post("/calendar",'save');
    Route::get("/calendar",'paginate');
    Route::delete("/calendar","remove");
});
