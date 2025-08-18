<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Support extends Model
{
    protected static $supports = [
        [
            'id' => 3,
            'name' => 'ប៊ែលធ឵ គ្រុប',
            'logo'=>"https://belteigroup.com.kh/images/beltei_group_in_cambodia.png",
            'link' => 'https://www.beltei.edu.kh/',
        ],
        [
            'id' => 1,
            'logo'=>"https://belteigroup.com.kh/images/beltei_international_university_in_cambodia.png",
            'name' => 'សាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ',
            'link' => 'https://www.beltei.edu.kh/biu',
        ],
        [
            'id' => 2,
            'logo'=>"https://belteigroup.com.kh/images/beltei_international_school_in_cambodia.png",
            'name' => 'សាលា ប៊ែលធី អន្តរជាតិ',
            'link' => 'https://www.beltei.edu.kh/bis',
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
