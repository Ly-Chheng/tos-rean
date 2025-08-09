<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Support extends Model
{
    protected static $supports = [
        [
            'id' => 1,
            'name' => 'សាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ',
            'link' => 'https://www.beltei.edu.kh/biu',
        ],
        [
            'id' => 2,
            'name' => 'សាលា ប៊ែលធី អន្តរជាតិ',
            'link' => 'https://www.beltei.edu.kh/bis',
        ],
        [
            'id' => 3,
            'name' => 'ប៊ែលធ឵ គ្រុប',
            'link' => 'https://www.beltei.edu.kh/',
        ],
    ];
    static function all($columns = ['*'])
    {
        return collect(self::$supports);
    }

    public static function find($id)
    {
        return collect(self::$supports)->firstWhere('id', $id);
    }
}
