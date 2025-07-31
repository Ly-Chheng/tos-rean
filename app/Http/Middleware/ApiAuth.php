<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use App\Http\Middleware\AuthJwt;
use Illuminate\Http\Response;
use App\Models\Student;

class ApiAuth
{
    public function handle(Request $request, Closure $next)
    {
        $auth = $request->bearerToken();

        if (ltrim($auth, 'Bearer ')) {
            $token = str_replace('Bearer ', '', $auth);
            $student = AuthJwt::decryptAuth($token);
        
            if ($student && isset($student->student_id)) {
                $dbStudent = Student::find($student->student_id);
                if ($dbStudent && $dbStudent->unique_id !== ($student->device_id ?? null)) {
                    return response()->json([
                        'code' => Response::HTTP_UNAUTHORIZED,
                        'status' => 'FORCE_LOGOUT',
                        'message' => app_lang('You have been logged out due to login from another device.', 'អ្នក​ត្រូវ​បាន​ចេញ​ ដោយសារ​ការ​ចូល​ពី​ឧបករណ៍​ផ្សេង។')
                    ]);
                }
                $request->request->set('student_id', $student->student_id);
                $request->request->set('student_code', $student->student_code);
                return $next($request);
            }
        }
        return response()->json([
            'code' => Response::HTTP_UNAUTHORIZED,
            'status' => 'UNAUTHORIZED',
            'message' => 'Please Login'
        ]);
    }

}