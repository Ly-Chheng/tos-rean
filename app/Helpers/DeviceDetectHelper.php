<?php
    use Stevebauman\Location\Facades\Location;
    use App\Models\LogOtpRequest;

    
    if (!function_exists('log_otp_request')) {
    function log_otp_request($email, $status)
    {
        $request = request();
        $ip = $request->ip();
        $userAgent = $request->header('User-Agent') ?? 'unknown';
        $deviceInfo = [
            'device_id' => $request->header('Device-ID') ?? $request->device_id,
            'device_name' => $request->header('Device-Name') ?? $request->device_name,
            'device_version' => $request->header('Device-Version') ?? $request->device_version,
            'platform' => $request->header('Platform') ?? $request->platform ?? 'unknown',
        ];

        // Safely attempt to get location
        $locationData = \Location::get($ip);
        $location = ($locationData && $locationData->cityName && $locationData->countryName)
            ? "{$locationData->cityName}, {$locationData->countryName}"
            : null;

        // Count OTP requests within last 24 hours
        $attemptCount = \App\Models\LogOtpRequest::where('email', $email)
            ->where('created_at', '>=', now()->subDay())
            ->count();

        // Create the OTP log entry
        \App\Models\LogOtpRequest::create([
            'email' => $email,
            'ip_address' => $ip,
            'user_agent' => $userAgent,
            'device_info' => json_encode($deviceInfo),
            'location' => $location,
            'status' => $status,
            'attempt_count' => $attemptCount + 1,
            'blocked' => $attemptCount >= 10,
        ]);
    }
}