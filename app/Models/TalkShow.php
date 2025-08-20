<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TalkShow extends Model
{
    protected static $talkShow = [
        [
            'id' => 1,
            'title' => "ក្ដីសង្ឃឹម លើសពីការរំពឹងទុក",
            'description' => "រីករាយទស្សនា BELTEI IS talkShow Ep.4 ដោយកញ្ញា ណាត សូនីតា ទៅលើប្រធានបទ៖ ចាប់ផ្ដើម និងបញ្ជប់",
            'videoId' => "lv2QNFlCGPo",
            'link' => "https://www.youtube.com/watch?v=lv2QNFlCGPo",
            'thumbnail' => "https://img.youtube.com/vi/lv2QNFlCGPo/maxresdefault.jpg",
            'created_at' => '2025-08-01 10:00:00',
        ],
        [
            'id' => 2,
            'title' => "ឱកាសមានហើយកុំអោយវាទៅណា",
            'description' => "Season 1 Ep.2 រៀនពីខ្លួនឯងក្នុងកន្លែងដែលផ្តល់ឱកាស ដោយ កញ្ញា សឺង សួនរ៉ូហ្សា",
            'videoId' => "LkEaVyZRSHo",
            'link' => "https://www.youtube.com/watch?v=LkEaVyZRSHo",
            'thumbnail' => "https://img.youtube.com/vi/LkEaVyZRSHo/maxresdefault.jpg",
            'created_at' => '2025-08-01 10:00:00',
        ],
        [
            'id' => 3,
            'title' => "ម៉ោះប្អូនៗទី១២!!! ធ្វើលំហាត់ផង ស្តាប់talkShow ផង ខំប្រឹងយកនិទ្ទេស A ទាំងអស់គ្",
            'description' => "សូមរីករាយទស្សនាការផ្សាយផ្ទាល់លើគេហទំព័រហ្វេសបុកផ្លូវការ BELTEI IS talkShow ដោយ កញ្ញា ចាន់ ឈុងបួយ ដែលជាសិស្សនិទ្ទេសA លើគ្រប់មុខវិជ្ជា ក្នុងសម័យប្រលងឆ្នាំ២០២៤ ទៅលើប្រធានបទ៖ គន្លឹះដើម្បីទទួលបាននិទ្ទេសA",
            'videoId' => "CFWMsp9I8MQ",
            'link' => "https://www.youtube.com/watch?v=CFWMsp9I8MQ",
            'thumbnail' => "https://img.youtube.com/vi/CFWMsp9I8MQ/maxresdefault.jpg",
            'created_at' => '2025-08-01 10:00:00',
        ],
        [
            'id' => 4,
            'title' => "ក្រោយភ្លៀង មេឃស្រឡះ",
            'description' => "Season 1 Ep.3 ក្រោយភ្លៀង មេឃស្រឡះ ដោយយុវជនជ័យលាភីកម្មវិធីជជែកដេញដោលយុវជនថ្នាក់ជាតិ ២០២៤",
            'videoId' => "DcwuJk8dV1M",
            'link' => "https://www.youtube.com/watch?v=DcwuJk8dV1M",
            'thumbnail' => "https://img.youtube.com/vi/DcwuJk8dV1M/maxresdefault.jpg",
            'created_at' => '2025-08-01 10:00:00',
        ],
        [
            'id' => 5,
            'title' => "ម៉ោះប្អូនៗទី១២!!! ធ្វើលំហាត់ផង ស្តាប់talkShow ផង ខំប្រឹងយកនិទ្ទេស A ទាំងអស់គ្",
            'description' => "សូមរីករាយទស្សនាការផ្សាយផ្ទាល់លើគេហទំព័រហ្វេសបុកផ្លូវការ BELTEI IS talkShow ដោយ កញ្ញា ចាន់ ឈុងបួយ ដែលជាសិស្សនិទ្ទេសA លើគ្រប់មុខវិជ្ជា ក្នុងសម័យប្រលងឆ្នាំ២០២៤ ទៅលើប្រធានបទ៖ គន្លឹះដើម្បីទទួលបាននិទ្ទេសA",
            'videoId' => "CFWMsp9I8MQ",
            'link' => "https://www.youtube.com/watch?v=CFWMsp9I8MQ",
            'thumbnail' => "https://img.youtube.com/vi/CFWMsp9I8MQ/maxresdefault.jpg",
            'created_at' => '2025-08-01 10:00:00',
        ],
        [
            'id' => 6,
            'title' => "ក្រោយភ្លៀង មេឃស្រឡះ",
            'description' => "Season 1 Ep.3 ក្រោយភ្លៀង មេឃស្រឡះ ដោយយុវជនជ័យលាភីកម្មវិធីជជែកដេញដោលយុវជនថ្នាក់ជាតិ ២០២៤",
            'videoId' => "DcwuJk8dV1M",
            'link' => "https://www.youtube.com/watch?v=DcwuJk8dV1M",
            'thumbnail' => "https://img.youtube.com/vi/DcwuJk8dV1M/maxresdefault.jpg",
            'created_at' => '2025-08-01 10:00:00',
        ],
        
    ];

    public static function all($columns = ['*'])
    {
        return collect(self::$talkShow)->sortByDesc('created_at');
    }

    public static function latest()
    {
        return self::all()->first();
    }

    public static function last()
    {
        return collect(self::$talkShow)->sortByDesc('created_at')->last();
    }
}
