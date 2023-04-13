<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    $date=date("Y-m-d");
    $str=strval($date);
    return redirect("/deliveries?date=".$str);
});

Route::controller(\App\Http\Controllers\ProviderController::class)->group(function (){
    Route::get("/providers","all");
    Route::post("/providers","save");
    Route::put("/providers","update");
});

Route::controller(\App\Http\Controllers\DeliveryController::class)->group(function (){
    Route::put("/deliveries","update");
    Route::post("/deliveries","save");
    Route::get("/deliveries","provider_deliveries");
    Route::get("/report/deliver","load_deliver_deliveries");
    Route::post("/report/deliver","deliver_deliveries");
    Route::post("/report/deliver/pdf","toPdf");
    Route::post("/report/image","img");
});

Route::controller(\App\Http\Controllers\DeliverController::class)->group(function (){
    Route::get("/delivers","all");
    Route::post("/delivers","save");
    Route::put("/delivers","update");
});

Route::controller(\App\Http\Controllers\CalendarController::class)->group(function (){
    Route::get("/calendar","all");
    Route::post("/calendar","save");
    Route::put("/calendar","remove");
});

Route::controller(\App\Http\Controllers\ReportController::class)->group(function (){
    Route::get("/report","of");
    Route::post("/report","ofName");
});

Route::controller(\App\Http\Controllers\SpentController::class)->group(function (){
    Route::get("/spent","load");
    Route::post("/spent","save");
    Route::put("/spent","update");
    Route::post("/spent/filter","perDateAndDeliver");
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
