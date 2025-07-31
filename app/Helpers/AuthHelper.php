<?php
use App\Http\Middleware\AuthJwt;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Response;
use App\Models\Enrollment;

if (!function_exists('student_auth')) {
    function student_auth(?string $token = null)
    {
        if ($token) {
            return AuthJwt::decryptAuth($token);
        }
        return null; 
    }
}

if (!function_exists('validate_student_id')) {
    function validate_student_id($student_id)
    {
        $validator = Validator::make(['student_id' => $student_id], [
            'student_id' => 'required|integer|exists:students,id'
        ], [
            'student_id.*' => app_lang('You are unauthorized for this action.', 'អ្នកមិនត្រូវបានអនុញ្ញាតសម្រាប់សកម្មភាពនេះទេ។')
        ]);

        if ($validator->fails()) {
            $message = implode("\n", $validator->errors()->all());
            $response['code'] = Response::HTTP_NOT_FOUND;
            $response['message'] =  $message ?? app_lang('No Data Available', 'មិនមានទិន្នន័យ');
            return response()->json($response);
        }
    }
}

if (!function_exists('validate_enrolled')) {
    function validate_enrolled($studentId, $courseId = null, $collectionId = null)
    {
        if (!$courseId && !$collectionId) {
            return false;
        }

        $query = Enrollment::where('student_id', $studentId)
            ->where('status', true)
            ->where(function ($q) {
                $q->whereNull('expires_at')
                  ->orWhere('expires_at', '>=', now());
            });

        if ($courseId) {
            $query->where('course_id', $courseId);
        } elseif ($collectionId) {
            $query->where('collection_id', $collectionId);
        }

        return $query->exists(); // Cast boolean to 0 or 1
    }
}

if (!function_exists('check_collection_enrolled')) {
    function check_collection_enrolled($studentId, $collectionId = null)
    {
        if (!$collectionId) {
            return false;
        }

        $query = Enrollment::where('student_id', $studentId)
            ->where('status', true)
            ->where(function ($q) {
                $q->whereNull('expires_at')
                  ->orWhere('expires_at', '>=', now());
            });

        $query->where('collection_id', $collectionId);
        return $query->exists();
    }
}

if (!function_exists('check_course_enrolled')) {
    function check_course_enrolled($studentId, $courseId = null)
    {
        if (!$courseId) {
            return false;
        }
        $query = Enrollment::where('student_id', $studentId)
            ->where('status', true)
            ->where(function ($q) {
                $q->whereNull('expires_at')
                  ->orWhere('expires_at', '>=', now());
            });
        $query->where('course_id', $courseId);
        return $query->exists();
    }
}


