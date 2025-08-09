<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class BookCategory extends Model
{
    protected static $bookCategories = [
        [
            'id' => 1,
            'title' => 'គណិតវិទ្យា',
            'image' => 'https://cdn-icons-png.freepik.com/512/4720/4720458.png',
        ],
        [
            'id' => 2,
            'title' => 'កម្រងវិញ្ញ្ញាសារឆ្នាំចាស់',
            'image' => 'https://cdn-icons-png.flaticon.com/512/2106/2106584.png',
        ],
        [
            'id' => 3,
            'title' => 'វេយ្យាករណ៍',
            'image' => 'https://icon-library.com/images/grammar-icon/grammar-icon-16.jpg',
        ],
        [
            'id' => 4,
            'title' => 'សៀវភៅជា Audio',
            'image' => 'https://cdn-icons-png.flaticon.com/512/4539/4539103.png',
        ],
    ];

    public static function all($columns = ['*'])
    {
        return collect(self::$bookCategories);
    }

    public static function find($id)
    {
        return collect(self::$bookCategories)->firstWhere('id', $id);
    }
}