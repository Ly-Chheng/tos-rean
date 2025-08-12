<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StemBook extends Model
{
    protected static $stemBooks = [
        [
            'id' => 1,
            'title' => 'The Hunger Games',
            'genre' => 'Dystopian Fiction',
            'image' => 'https://m.media-amazon.com/images/I/817BQY9AkfL._SY522_.jpg',
        ],
        [
            'id' => 2,
            'title' => 'Catching Fire',
            'genre' => 'ប្រាជ្ញាជីវិត',
            'image' => 'https://mindbooks.com.kh/storage/nbQvZrNki9gL2pNR5rX1OBmmbRS5FEtbH65Q9ttf.jpeg',
        ],
        [
            'id' => 3,
            'title' => 'Mockingjay',
            'genre' => 'Kid Story Zone',
            'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALD-u3CtIHfRsZ0tIhbHVgWAPLcdt3cRitw&s',
        ],
        [
            'id' => 4,
            'title' => 'The Maze Runner',
            'genre' => 'Dystopian Fiction',
            'image' => 'https://m.media-amazon.com/images/I/817BQY9AkfL._SY522_.jpg',
        ],
        [
            'id' => 5,
            'title' => 'The Maze Runner',
            'genre' => 'Dystopian Fiction',
            'image' => 'https://m.media-amazon.com/images/I/817BQY9AkfL._SY522_.jpg',
        ],
    ];

    public static function all($columns = ['*'])
    {
        return collect(self::$stemBooks);
    }

    public static function find($id)
    {
        return collect(self::$stemBooks)->firstWhere('id', $id);
    }
}
