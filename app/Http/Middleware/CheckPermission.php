<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

use Inertia\Inertia;
class CheckPermission
{
    public function handle($request, Closure $next, $permissions)
    {
        $user = auth()->user();
        $permissions = explode('|', $permissions);

        foreach ($permissions as $permission) {
            if ($user->can($permission)) {
                return $next($request); 
            }
        }

        return Inertia::render('Errors/Unauthorized', [
            'status' => 403,
        ])->toResponse($request)->setStatusCode(403);
    }
}