<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class CheckScreenLock
{
    public function handle(Request $request, Closure $next)
    {
        if (auth()->check() && session('is_locked', false) && !$request->routeIs('lock-screen*')) {
            return redirect()->route('lock-screen');
        }

        return $next($request);
    }
}