<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class Strategy extends Model
{
    protected static $strategies = [
        [
            'id' => 1,
            'title' => 'សម្ភារៈដែលត្រូវត្រៀមមុនប្រឡង ១សប្តាហ៍',
            'image' => 'https://m.media-amazon.com/images/I/61AHznkPDFL.jpg',
            'detail' => 'រយៈពេល៖ ២០០ នាទី',
        ],
        [
            'id' => 2,
            'title' => 'អ្វីដែលមិនគួរកំឡុងពេលប្រលងបាក់ឌុប',
            'image' => 'https://i.ytimg.com/vi/uw1PLAdxrh4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBS2S9Gu7UoabBIdN4E7vwsmoQRxw',
            'detail' => 'រយៈពេល៖ ២០០ នាទី',
        ],
        [
            'id' => 3,
            'title' => 'ការរៀបចំសន្លឹក',
            'image' => 'https://www.rootsofaction.com/wp-content/uploads/2012/09/Good-grades-1.jpg',
            'detail' => 'រយៈពេល៖ ១០០ នាទី',
        ],
        [
            'id' => 4,
            'title' => 'Tip ខ្លីៗ សម្រាប់ប្អូនៗសម្រាប់ការប្រលងបាក់ឌុប្លីៗ សម្រាប់ប្អូនៗសម្រាប់ការប្រលងបាក់ឌុប',
            'image' => 'https://oss5.tnaot.com/tnaot/image/2021/12/26/fe5f9329143c41aea111d5969e8cba0b.jpg',
            'detail' => 'រយៈពេល៖ ១០០ នាទី',
        ]
        
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