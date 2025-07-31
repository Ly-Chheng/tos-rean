<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class Authenticate extends Middleware
{
    protected function redirectTo($request)
    {
        Log::info('Auth middleware triggered for URL: ' . $request->url() . ', Inertia: ' . ($request->inertia() ? 'yes' : 'no'));
        $loginUrl = route('login'); // Use route() for absolute URL
        if ($request->inertia()) {
            Log::info('Redirecting to login via Inertia: ' . $loginUrl);
            return Inertia::location($loginUrl);
        }
        Log::info('Redirecting to login normally: ' . $loginUrl);
        return redirect()->guest($loginUrl);
    }
}