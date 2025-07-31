<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Validation\ValidationException; 

class AuthenticatedSessionController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('dashboard', absolute: false));
    }

    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }

    public function showLockScreen(Request $request)
    {
        if (!$request->session()->get('is_locked', false)) {
            return redirect()->intended(route('dashboard'));
        }

        return Inertia::render('Auth/LockScreen', [
            'user' => $request->user()->only('id', 'name', 'email', 'profile_photo_url'),
        ]);
    }

    public function unlock(Request $request)
    {
        $request->validate([
            'password' => 'required|string',
        ]);

        if (!Auth::validate([
            'email' => $request->user()->email,
            'password' => $request->password,
        ])) {
            throw ValidationException::withMessages([
                'password' => ['The provided password is incorrect.'],
            ]);
        }

        $request->session()->forget('is_locked');
        return redirect()->intended(route('dashboard'));
    }

    public function lock(Request $request)
    {
        $request->session()->put('is_locked', true);
        return Inertia::location(route('lock-screen'));
    }
}
