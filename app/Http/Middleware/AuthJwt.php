<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Firebase\JWT\ExpiredException;

class AuthJwt
{
    public static function encryptAuth($data)
    {
        $data['time'] = time();
        $data['exp'] = time() + 86400; 
        try {
            return JWT::encode($data, env('JWT_SECRET'), env('ALGORITHM'));
        } catch (\Exception $exception) {
            return false;
        }
    }

    public static function decryptAuth($token)
    {
        try {
            return JWT::decode($token, new Key(env('JWT_SECRET'), env('ALGORITHM', 'HS256')));
        } catch (\Exception $exception) {
            return false;
        }
    }

    public static function refreshToken($data)
    {
        $data['last_login'] = time();
        try {
            return JWT::encode($data, env('JWT_SECRET'), env('ALGORITHM'));
        } catch (\Exception $exception) {
            return false;
        }
    }
}
