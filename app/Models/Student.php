<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;


class Student extends Model
{
    protected static $student = [
        [
            'id' => 1,
            'name' => "ជី ម៉ូលិកា",
            'image' => "https://thumbs.dreamstime.com/b/beauty-woman-portrait-girl-beautiful-face-smiling-closeup-happy-perfect-smile-white-teeth-camera-attractive-healthy-76138194.jpg",
        ],
        [
            'id' => 2,
            'name' => "សុខ ស្រីនាង",
            'image' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiJ4F_BRO1JVJHCf9e436D9sETFscVpIVfb8YvqCdGgG0q1HfYkY1WUlhvEJPDJFGMmk&usqp=CAU",
        ],
        [
            'id' => 3,
            'name' => "លឹម វណ្ណា",
            'image' => "https://img.freepik.com/free-photo/girl-city_1157-5086.jpg?semt=ais_hybrid&w=740&q=80",
        ],
        [
            'id' => 4,
            'name' => "សុវណ្ណ រដ្ឋាបុត្រ",
            'image' => "https://img.freepik.com/free-photo/front-view-young-beautiful-lady-red-t-shirt-black-jeans-holding-different-copybooks-files-smiling-with-bag-white_140725-18639.jpg",
        ],
        [
            'id' => 3,
            'name' => "លឹម វណ្ណា",
            'image' => "https://img.freepik.com/free-photo/girl-city_1157-5086.jpg?semt=ais_hybrid&w=740&q=80",
        ],
        [
            'id' => 4,
            'name' => "សុវណ្ណ រដ្ឋាបុត្រ",
            'image' => "https://img.freepik.com/free-photo/front-view-young-beautiful-lady-red-t-shirt-black-jeans-holding-different-copybooks-files-smiling-with-bag-white_140725-18639.jpg",
        ],[
            'id' => 3,
            'name' => "លឹម វណ្ណា",
            'image' => "https://img.freepik.com/free-photo/girl-city_1157-5086.jpg?semt=ais_hybrid&w=740&q=80",
        ]
        
    ];

    public static function all($columns = ['*'])
    {
        return collect(self::$student);
    }

    public static function find($id)
    {
        return collect(self::$student)->firstWhere('id', $id);
    }
}
