<?php

use App\Http\Controllers\Auth\UserController;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/home');
Route::get('home', [App\Http\Controllers\Frontend\HomeController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified', HandleInertiaRequests::class])->group(function () {

    Route::resource('users', App\Http\Controllers\Auth\UserController::class);
    Route::resource('permission', App\Http\Controllers\Auth\PermissionController::class);
    Route::resource('roles', App\Http\Controllers\Auth\RoleController::class);
    Route::get('/lock-screen', [App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'showLockScreen'])->name('lock-screen');    
    Route::post('/lock-screen/unlock', [App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'unlock'])->name('lock-screen.unlock');
    Route::post('/lock-screen', [App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'lock'])->name('lock-screen.lock');

    Route::get('dashboard', [App\Http\Controllers\Backend\DashboardController::class, 'index'])->name('dashboard');
});


require __DIR__ . '/auth.php';