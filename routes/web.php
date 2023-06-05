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
    return Inertia::render("Home");
});

Route::middleware(\App\Http\Middleware\TokenFilter::class)->group(function () {
    Route::get("/providers", [\App\Http\Controllers\ProviderController::class, "all"]);
    Route::get("/deliveries", [\App\Http\Controllers\DeliveryController::class, "provider_deliveries"]);
    Route::get("/report/deliver", [\App\Http\Controllers\DeliveryController::class, "load_deliver_deliveries"]);
    Route::post("/report/deliver", [\App\Http\Controllers\DeliveryController::class, "deliver_deliveries"]);
    Route::post("/report/deliver/pdf", [\App\Http\Controllers\DeliveryController::class, "toPdf"]);
    Route::post("/report/image", [\App\Http\Controllers\DeliveryController::class, "img"]);
    Route::get("/delivers", [\App\Http\Controllers\DeliverController::class, "all"]);
    Route::get("/calendar", [\App\Http\Controllers\CalendarController::class, "all"]);
    Route::put("/calendar", [\App\Http\Controllers\CalendarController::class, "remove"]);
    Route::get("/report", [\App\Http\Controllers\ReportController::class, "of"]);
    Route::post("/report", [\App\Http\Controllers\ReportController::class, "ofName"]);
    Route::get("/spent", [\App\Http\Controllers\SpentController::class, "load"]);
});
Route::controller(\App\Http\Controllers\UsersController::class)->group(function (){
    Route::post("/user/in","login");
    Route::post("/user/out","logout");
});
require __DIR__.'/api.php';
