<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class Category extends Model
{
    protected static $categories = [
        [
            'id' => 1,
            'title' => 'Romantic Novels',
            'image' => 'https://pixy.org/download/588319/',
        ],
        [
            'id' => 2,
            'title' => 'Children\'s Books',
            'image' => 'https://clipart-library.com/img/675422.png',
        ],
        [
            'id' => 3,
            'title' => 'Animal Adventures',
            'image' => 'https://www.pngkey.com/png/full/51-510953_tortoise-sea-turtle-reading-a-book.png',
        ],
        [
            'id' => 4,
            'title' => 'Wildlife Stories',
            'image' => 'https://static.vecteezy.com/system/resources/thumbnails/020/647/524/small_2x/lion-face-icon-cute-animal-icon-in-circle-png.png',
        ],
        [
            'id' => 5,
            'title' => 'Fantasy Fiction',
            'image' => 'https://cdn-icons-png.freepik.com/256/1841/1841047.png?semt=ais_white_label',
        ],
        [
            'id' => 6,
            'title' => 'Love Story Classics',
            'image' => 'https://cdn-icons-png.freepik.com/256/2759/2759168.png?semt=ais_white_label',
        ],
    ];

    public static function all($columns = ['*'])
    {
        return collect(self::$categories);
    }

    public static function find($id)
    {
        return collect(self::$categories)->firstWhere('id', $id);
    }
}