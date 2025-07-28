<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\HomeController;

// Route::get('/', function () {
//     return view('welcome');
// });
Route::resource('dashboard', App\Http\Controllers\Frontend\HomeController::class);
