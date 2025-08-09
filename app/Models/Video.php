<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class Video extends Model
{
    protected static $videos = [
        [
            'id' => 1,
            'title' => 'បទបង្ហាញ៖ ការរៀនដើម្បីទទួលបាននិទ្ទេស A',
            'duration' => '15 នាទី',
            'videoId' => 'bpFHTq529ME',
            'thumbnail' => 'https://img.youtube.com/vi/bpFHTq529ME/hqdefault.jpg',
            'videoUrl' => 'https://www.youtube.com/embed/bpFHTq529ME',
        ],
        [
            'id' => 2,
            'title' => 'បទបង្ហាញ៖ យុទ្ធសាស្រ្តសិក្សាថ្នាក់ទី១២',
            'duration' => '20 នាទី',
            'videoId' => 'dQw4w9WgXcQ',
            'thumbnail' => 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
            'videoUrl' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        ],
        [
            'id' => 3,
            'title' => 'បទបង្ហាញ៖ របៀបរៀនអោយមានប្រសិទ្ធភាព',
            'duration' => '18 នាទី',
            'videoId' => 'tgbNymZ7vqY',
            'thumbnail' => 'https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg',
            'videoUrl' => 'https://www.youtube.com/embed/tgbNymZ7vqY',
        ],
    ];

    public static function all($columns = ['*'])
    {
        return collect(self::$videos);
    }

    public static function find($id)
    {
        return collect(self::$videos)->firstWhere('id', $id);
    }
}