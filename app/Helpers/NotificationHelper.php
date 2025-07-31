<?php
    use Illuminate\Support\Facades\Http;
    use Google\Client as GoogleClient;
    use Illuminate\Support\Facades\Log;

    
    if (!function_exists('sendNotification')) {
    function sendNotification(string $title, string $body, array $data = []): ?string
    {
        $appId = env('ONESIGNAL_APP_ID');
        $apiKey = env('ONESIGNAL_API_KEY');

        $payload = [
            'app_id' => $appId,
            'included_segments' => ['All'], // Broadcast to all users
            'headings' => ['en' => $title],
            'contents' => ['en' => $body],
            'data' => $data,

            // Optional customizations
            'android_channel_id' => env('ONESIGNAL_ANDROID_CHANNEL_ID'),
            'small_icon' => 'ic_notification',
            'large_icon' => asset('assets/image/others/placeholderss.jpg'),
            'ios_attachments' => [
                'id' => asset('assets/image/others/placeholderss.jpg')
            ],
            'ios_sound' => 'default',
            'android_sound' => 'default',
            'priority' => 10,
        ];

        $response = Http::withHeaders([
            'Authorization' => 'Basic ' . $apiKey,
            'Content-Type' => 'application/json',
        ])->post('https://onesignal.com/api/v1/notifications', $payload);
            // dd($response->body());
        $json = $response->json();
        return $json['id'] ?? null;
    }
}


    // if (!function_exists('sendToEveryone')) {
    //     function sendToEveryone($topic, $title, $body, $image, $data = [])
    //     {
    //         $firebaseApiUrl = 'https://fcm.googleapis.com/v1/projects/beltei-learning-draft/messages:send';
    //         $accessToken = getAccessToken();
    //         $payload = [
    //             'message' => [
    //                 'topic' => 'eg0jyAvFhVlT1Qz35besrQ:APA91bFUH6AmaKgUMGlQ_owVr1prTBxmkp-FeKQ4zvzffdReo2wpb4mdDZ0kylxD7n5qzz8QTyBO_PET8QNDXJPAiLCqqjDfXGtwgDQ38LeZS99TmVAdvFs',
    //                 'notification' => [
    //                     'title' => $title,
    //                     'body' => $body,
    //                     'image' => $image, 
    //                 ],
    //                 'apns' => array(
    //                     'payload' => array(
    //                         'aps' => array(
    //                             'sound' => 'default',
    //                             'apns-priority' => '10',
    //                             'content-available' => 1,
    //                             'mutable-content' => 1,
    //                         ),
    //                     ),
    //                 ),
    //                 'data' => (object) $data,
    //             ],
    //         ];
            
    //         $response = Http::withHeaders([
    //             'Authorization' => 'Bearer ' . $accessToken,
    //             'Content-Type' => 'application/json',
    //         ])->post($firebaseApiUrl, $payload);
    //         // dd($response);
    //         if ($response->successful()) {
    //             return $response->json();
    //         } else {
    //             Log::error('FCM Error: ' . $response->body());
    //             Log::error('Payload: ' . json_encode($payload));
    //             return $response->body();
    //         }
    //     }
    // }

    // if (!function_exists('getAccessToken')) {
    //     function getAccessToken()
    //     {
    //         $serviceAccountFile = storage_path('app/beltei-learning-draft-firebase-adminsdk-fbsvc-f79b34a1fd.json');
    //         $serviceAccount = json_decode(file_get_contents($serviceAccountFile), true);
    
    //         $privateKey = $serviceAccount['private_key'];
    //         $clientEmail = $serviceAccount['client_email'];
    //         $tokenUrl = 'https://www.googleapis.com/oauth2/v4/token';
    
    //         $header = base64_encode(json_encode(['alg' => 'RS256', 'typ' => 'JWT']));
    //         $payload = base64_encode(json_encode([
    //             'iss' => $clientEmail,
    //             'scope' => 'https://www.googleapis.com/auth/firebase.messaging',
    //             'aud' => $tokenUrl,
    //             'exp' => time() + 3600,
    //             'iat' => time(),
    //         ]));
    
    //         $header = rtrim(strtr($header, '+/', '-_'), '=');
    //         $payload = rtrim(strtr($payload, '+/', '-_'), '=');
    
    //         openssl_sign("$header.$payload", $signature, $privateKey, OPENSSL_ALGO_SHA256);
    //         $signature = rtrim(strtr(base64_encode($signature), '+/', '-_'), '=');

    //         $jwt = "$header.$payload.$signature";
    
    //         $response = Http::asForm()->post($tokenUrl, [
    //             'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    //             'assertion' => $jwt,
    //         ]);
    
    //         if ($response->successful()) {
    //             return $response['access_token'];
    //         } else {
    //             throw new \Exception('Failed to obtain access token: ' . $response->body());
    //         }
    //     }
    // }
        
    // if (!function_exists('getAccessToken')) {
    //     function getAccessToken()
    //     {
    //         $serviceAccountPath = storage_path('app/beltei-learning-draft-firebase-adminsdk-fbsvc-f79b34a1fd.json');
            
    //         $client = new GoogleClient();
    //         $client->setAuthConfig($serviceAccountPath);
    //         $client->addScope('https://www.googleapis.com/auth/firebase.messaging');
    //         $client->useApplicationDefaultCredentials();
    //         $accessTokenInfo = $client->fetchAccessTokenWithAssertion();
    //         return $accessTokenInfo['access_token'];
    //     }
    // }