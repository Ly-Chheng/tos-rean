<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class Strategy extends Model
{
    protected static $strategies = [
        [
            'id' => 1,
            'title' => 'ការប្រឡង ថ្នាក់ទី១២ ឆ្នាំ២០២៣',
            'image' => 'https://www.sparkadmissions.com/wp-content/uploads/2020/04/How_to_Get_Good_Grades_in_High_School.jpg',
            'detail' => 'រយៈពេល៖ ២០០ នាទី',
        ],
        [
            'id' => 2,
            'title' => 'សៀវភៅបំពេញលំហាត់វិញ្ញាសា',
            'image' => 'https://www.sparkadmissions.com/wp-content/uploads/2020/04/How_to_Get_Good_Grades_in_High_School.jpg',
            'detail' => 'រយៈពេល៖ ២០០ នាទី',
        ],
        [
            'id' => 3,
            'title' => 'មេរៀនគន្លឹះជាប់លើកទី១',
            'image' => 'https://www.rootsofaction.com/wp-content/uploads/2012/09/Good-grades-1.jpg',
            'detail' => 'រយៈពេល៖ ១០០ នាទី',
        ],
        [
            'id' => 4,
            'title' => 'មេរៀនគន្លឹះជាប់លើកទី១',
            'image' => 'https://myfirstnestegg.com/wp-content/uploads/student-proudly-holds-good-grade.png',
            'detail' => 'រយៈពេល៖ ១០០ នាទី',
        ],
        
    ];

    public static function all($columns = ['*'])
    {
        return collect(self::$strategies);
    }

    public static function find($id)
    {
        return collect(self::$strategies)->firstWhere('id', $id);
    }
}