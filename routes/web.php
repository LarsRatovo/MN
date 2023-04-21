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
    Route::post("/providers", [\App\Http\Controllers\ProviderController::class, "save"]);
    Route::put("/providers", [\App\Http\Controllers\ProviderController::class, "update"]);
    Route::post("/providers/name", [\App\Http\Controllers\ProviderController::class, "search"]);
    Route::put("/deliveries", [\App\Http\Controllers\DeliveryController::class, "update"]);
    Route::post("/deliveries", [\App\Http\Controllers\DeliveryController::class, "save"]);
    Route::get("/deliveries", [\App\Http\Controllers\DeliveryController::class, "provider_deliveries"]);
    Route::delete("/deliveries/{id}", [\App\Http\Controllers\DeliveryController::class, "remove"]);

    Route::get("/report/deliver", [\App\Http\Controllers\DeliveryController::class, "load_deliver_deliveries"]);
    Route::post("/report/deliver", [\App\Http\Controllers\DeliveryController::class, "deliver_deliveries"]);
    Route::post("/report/deliver/pdf", [\App\Http\Controllers\DeliveryController::class, "toPdf"]);
    Route::post("/report/image", [\App\Http\Controllers\DeliveryController::class, "img"]);
    Route::get("/delivers", [\App\Http\Controllers\DeliverController::class, "all"]);
    Route::post("/delivers", [\App\Http\Controllers\DeliverController::class, "save"]);
    Route::put("/delivers", [\App\Http\Controllers\DeliverController::class, "update"]);
    Route::get("/calendar", [\App\Http\Controllers\CalendarController::class, "all"]);
    Route::post("/calendar", [\App\Http\Controllers\CalendarController::class, "save"]);
    Route::put("/calendar", [\App\Http\Controllers\CalendarController::class, "remove"]);
    Route::get("/report", [\App\Http\Controllers\ReportController::class, "of"]);
    Route::post("/report", [\App\Http\Controllers\ReportController::class, "ofName"]);
    Route::get("/spent", [\App\Http\Controllers\SpentController::class, "load"]);
    Route::post("/spent", [\App\Http\Controllers\SpentController::class, "save"]);
    Route::put("/spent", [\App\Http\Controllers\SpentController::class, "update"]);
    Route::post("/spent/filter", [\App\Http\Controllers\SpentController::class, "perDateAndDeliver"]);
});
Route::controller(\App\Http\Controllers\UsersController::class)->group(function (){
    Route::post("/user/in","login");
    Route::post("/user/out","logout");
});
require __DIR__.'/auth.php';
