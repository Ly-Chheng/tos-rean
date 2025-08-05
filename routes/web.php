<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Auth\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\HandleInertiaRequests;

Route::redirect('/', '/homepage');

Route::get('homepage', [App\Http\Controllers\Web\HomepageController::class, 'index'])->name('homepage');
Route::get('classes', [App\Http\Controllers\Web\ClassController::class, 'index'])->name('classes');

Route::middleware(['auth', 'verified', HandleInertiaRequests::class])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('faqs', App\Http\Controllers\Frontend\FaqsController::class);
    Route::resource('users', App\Http\Controllers\Auth\UserController::class);
    Route::resource('books', App\Http\Controllers\Frontend\BookController::class);
    Route::resource('permission', App\Http\Controllers\Auth\PermissionController::class);
    Route::resource('roles', App\Http\Controllers\Auth\RoleController::class);
    Route::get('/lock-screen', [App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'showLockScreen'])->name('lock-screen');    
    Route::post('/lock-screen/unlock', [App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'unlock'])->name('lock-screen.unlock');
    Route::post('/lock-screen', [App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'lock'])->name('lock-screen.lock');
});

require __DIR__ . '/auth.php';
