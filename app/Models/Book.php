<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected static $books = [
        [
            'id' => '1',
            'title' => 'កម្រងវិញ្ញាសាសម្រាប់ប្រឲលង ២០២៥',
            'description' => 'ការអានប្រវត្តិសាស្ត្រអាចនាំមកនូវការរីករាយ និងផ្តល់ឱ្យអ្នកអាននូវបទពិសោធន៍គួរជាទីពេញចិត្ត ប៉ុន្តែ ចូរយើងសាកល្បងប្រៀបធៀបថា យើងកំពុងទស្សនាទីកន្លែងណាមួយ ដែលមានទេសភាពស្រស់ត្រកាល។',
            'image' => 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677798640i/6536021.jpg',
            'views' => 99,
            'date' => '14/08/2025',
            'url' => '/book/1'
        ],
        [
            'id' => '2',
            'title' => 'សៀវភៅគណិតវិទ្យាសម្រាប់ប្រឡង ២០២៥',
            'description' => 'សៀវភៅនេះផ្តល់នូវគន្លឹះ និងលំហាត់គណិតវិទ្យាដែលសំខាន់សម្រាប់ការត្រៀមប្រឡងបាក់ឌុប។',
            'image' => 'https://imgv2-2-f.scribdassets.com/img/document/698751290/original/42a42921ed/1?v=1',
            'views' => 120,
            'date' => '14/08/2025',
            'url' => '/book/2'
        ],
        [
            'id' => '3',
            'title' => 'រឿងព្រេងខ្មែរទាក់ទងនឹងភ្នំ',
            'description' => 'ប្រជុំរឿងព្រេងខ្មែរភាគ១ ៖ គឺជាបណ្ដារឿងរ៉ាវ ដែលទាក់ទងទៅនិងជីវភាពប្រចាំថ្ងៃរបស់សង្គមខ្មែរសម័យបុរាណ',
            'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsYJ9CLa6wove8mJ1J6EPSXGPGS8gSwhlGDQ&s',
            'views' => 99,
            'date' => '14/08/2025',
            'url' => '/book/1'
        ],
        [
            'id' => '4',
            'title' => 'កម្រងវិញ្ញាសារ និងអត្រាកំណែគណិតវិទ្យា',
            'description' => 'កម្រងវិញ្ញាសារ និងអត្រាកំណែគណិតវិទ្យា ថ្នាក់ទី១២ - សាលាឌីជីថល',
            'image' => 'https://sala.moeys.gov.kh/_next/image?url=https%3A%2F%2Fapi.weteka.org%2Fpublic%2Fbooks%2F67ac03a58bd9e50b5fd5dd70%2F0001.png&w=1920&q=75',
            'views' => 120,
            'date' => '14/08/2025',
            'url' => '/book/2'
        ],
        [
            'id' => '4',
            'title' => 'កម្រងវិញ្ញាសារ និងអត្រាកំណែគណិតវិទ្យា',
            'description' => 'កម្រងវិញ្ញាសារ និងអត្រាកំណែគណិតវិទ្យា ថ្នាក់ទី១២ - សាលាឌីជីថល',
            'image' => 'https://sala.moeys.gov.kh/_next/image?url=https%3A%2F%2Fapi.weteka.org%2Fpublic%2Fbooks%2F67ac03a58bd9e50b5fd5dd70%2F0001.png&w=1920&q=75',
            'views' => 120,
            'date' => '14/08/2025',
            'url' => '/book/2'
        ],
    ];

    public static function all($columns = ['*'])
    {
        return collect(self::$books);
    }

    public static function find($id)
    {
        return collect(self::$books)->firstWhere('id', $id);
    }
}
