<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware(\App\Http\Middleware\TokenFilter::class)->group(function () {
    Route::post("/providers", [\App\Http\Controllers\ProviderController::class, "save"]);
    Route::put("/providers", [\App\Http\Controllers\ProviderController::class, "update"]);
    Route::post("/providers/search", [\App\Http\Controllers\ProviderController::class, "search"]);
    Route::put("/deliveries", [\App\Http\Controllers\DeliveryController::class, "update"]);
    Route::post("/deliveries", [\App\Http\Controllers\DeliveryController::class, "save"]);
    Route::delete("/deliveries/{id}", [\App\Http\Controllers\DeliveryController::class, "remove"]);
    Route::post("/delivers", [\App\Http\Controllers\DeliverController::class, "save"]);
    Route::put("/delivers", [\App\Http\Controllers\DeliverController::class, "update"]);
    Route::post("/calendar", [\App\Http\Controllers\CalendarController::class, "save"]);
    Route::post("/spent", [\App\Http\Controllers\SpentController::class, "save"]);
    Route::put("/spent", [\App\Http\Controllers\SpentController::class, "update"]);
    Route::post("/spent/filter", [\App\Http\Controllers\SpentController::class, "perDateAndDeliver"]);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
