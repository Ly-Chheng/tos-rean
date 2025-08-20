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
            'thumbnail'=>'https://m.media-amazon.com/images/I/61AHznkPDFL.jpg',
            'image' => [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNS6bHg_TL-iAPN3DTrvTd7xLwvoQQZ1UpA&s',
                'https://t3.ftcdn.net/jpg/05/25/09/50/360_F_525095099_h8hM7TYRaw3nX8HnZYF48ufi0vKaKfYz.jpg',
                'https://thumbs.dreamstime.com/b/modern-interior-home-library-bookshelves-hand-drawn-sketch-illustration-89190485.jpg'
            ],
            'detail' => 'រយៈពេល៖ ២០០ នាទី',
            'description' => 'ត្រៀមសម្ភារៈសំខាន់ៗដូចជា កាតសិស្ស ប៊ិច ខ្មៅដៃ ជ័រលុប បន្ទាត់ និងកាបូបថ្លាសម្រាប់ដាក់ឯកសារ។ ត្រូវប្រាកដថាសម្ភារៈទាំងនេះស្ថិតក្នុងស្ថានភាពល្អ និងរៀបចំជាមុនដើម្បីជៀសវាងភាពរញ៉េរញ៉ៃនៅថ្ងៃប្រឡង។',
            'date'=>" ព្រហស្បតិ៍, 26 មិថុនា 2025 23:22"
        ],
        [
            'id' => 2,
            'title' => 'អ្វីដែលមិនគួរកំឡុងពេលប្រលងបាក់ឌុប',
            'thumbnail'=>'https://i.ytimg.com/vi/uw1PLAdxrh4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBS2S9Gu7UoabBIdN4E7vwsmoQRxw',
            'image' => [

            ],
            'detail' => 'រយៈពេល៖ ២០០ នាទី',
            'description' => 'ជៀសវាងការយកទូរស័ព្ទ ឬឧបករណ៍អេឡិចត្រូនិកចូលបន្ទប់ប្រឡង ព្រោះអាចនាំឱ្យត្រូវបានលុបឈ្មោះ។ កុំនិយាយឬរំខានអ្នកផ្សេង និងគោរពច្បាប់ប្រឡងដើម្បីរក្សាសណ្តាប់ធ្នាប់។',
            'date'=>" ព្រហស្បតិ៍, 26 មិថុនា 2025 23:22"
        ],
        [
            'id' => 3,
            'title' => 'ការរៀបចំសន្លឹក',
            'thumbnail'=>'https://www.rootsofaction.com/wp-content/uploads/2012/09/Good-grades-1.jpg',
            'image' => [],
            'detail' => 'រយៈពេល៖ ១០០ នាទី',
            'description' => 'រៀបចំសន្លឹកឆ្លើយឱ្យមានរបៀប ដោយសរសេរច្បាស់លាស់ និងប្រើប៊ិចខៀវឬខ្មៅ។ ត្រូវសរសេរលេខសម្គាល់បេក្ខជន និងរៀបចំចម្លើយឱ្យងាយស្រួលសម្រាប់អ្នកត្រួតពិនិត្យ។',
            'date'=>" ព្រហស្បតិ៍, 26 មិថុនា 2025 23:22"
        ],
        [
            'id' => 4,
            'title' => 'Tip ខ្លីៗ សម្រាប់ប្អូនៗសម្រាប់ការប្រលងបាក់ឌុប',
            'thumbnail'=>'https://oss5.tnaot.com/tnaot/image/2021/12/26/fe5f9329143c41aea111d5969e8cba0b.jpg',
            'image' => [],
            'detail' => 'រយៈពេល៖ ១០០ នាទី',
            'description' => 'គន្លឹះសំខាន់ៗរួមមាន៖ គេងឱ្យបានគ្រប់គ្រាន់មុនថ្ងៃប្រឡង ពិនិត្យម៉ោង និងទីកន្លែងប្រឡងជាមុន និងរក្សាភាពស្ងប់ស្ងាត់អំឡុងពេលប្រឡង។ កុំភ័យ ហើយគ្រប់គ្រងពេលវេលាឱ្យបានល្អ។',
            'date'=>" ព្រហស្បតិ៍, 26 មិថុនា 2025 23:22"
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