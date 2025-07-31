<?php
    if (!function_exists('app_lang')) {
        function app_lang($en, $km)
        {
            $lang = request()->header('Accept-Language', 'en');
            return $lang == 'en' ? $en ?? '' : $km ?? '';
        }
    }
    

    