<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class Video extends Model
{
    protected static $videos = [
        [
            'id' => 1,
            'title' => 'លោក​ ផន វិសាល ជានិស្សិតឆ្នាំទី៤ ឆមាសទី២',
            'duration' => '15 នាទី',
            'videoId' => 'knNdjHvvZRo',
            'description'=>'លោក​ ផន វិសាល ជានិស្សិតឆ្នាំទី៤ ឆមាសទី២ មកពីមហាវិទ្យាល័យ អាកាសចរណ៍ សុីវិល នៃសាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ ដែលលោកនឹងបកស្រាយក្រោមប្រធានបទស្តីអំពី “គោលបំណង នៃការសិក្សាអាកាសចរណ៍ សុីវិល” នៅក្នុងកម្មវិធី BELTEI IU Talk ។',
            'thumbnail' => 'https://img.youtube.com/vi/knNdjHvvZRo/maxresdefault.jpg',
            'videoUrl' => 'https://www.youtube.com/embed/knNdjHvvZRo',
        ],
        [
            'id' => 2,
            'title' => 'កញ្ញា គង់ ចាន់រតនា',
            'duration' => '20 នាទី',
            'videoId' => '92qY-EQwhJk',
            'description'=>'កញ្ញា គង់ ចាន់រតនា ជានិស្សិតឆ្នាំទី៤ ឆមាសទី២  នៅក្នុងមហាវិទ្យាល័យ ច្បាប់ នៃសាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ ដែលកញ្ញានឹងបកស្រាយប្រធានបទ “ ការសិក្សានៅក្នុងមហាវិទ្យាល័យ ច្បាប់ នៃសាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ ”នៅក្នុងកម្មវិធី BELTEI IU Talk ។',
            'thumbnail' => 'https://img.youtube.com/vi/92qY-EQwhJk/maxresdefault.jpg',
            'videoUrl' => 'https://www.youtube.com/embed/92qY-EQwhJk',
        ],
        [
            'id' => 3,
            'title' => 'កញ្ញា សាន រ៉ូសីកា ជានិស្សិតឆ្នាំទី៣',
            'duration' => '18 នាទី',
            'videoId' => '16vnBjstCE8',
            'description'=>'កញ្ញា សាន រ៉ូសីកា ជានិស្សិតឆ្នាំទី៣ នៅក្នុងមហាវិទ្យាល័យ អាកាសចរណ៍ សុីវិល នៃសាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ ដែលកញ្ញានឹងបកស្រាយប្រធានបទ “មូលហេតុអ្វីបានជានាងខ្ញុំសម្រេចចិត្តជ្រើសរើស សិក្សាមុខជំនាញគ្រប់គ្រងក្រុមហ៊ុន អាកាសចរណ៏ និងអាកាសយានដ្ឋាននៅសាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ?”នៅក្នុងកម្មវិធី BELTEI IU Talk ។',
            'thumbnail' => 'https://img.youtube.com/vi/16vnBjstCE8/maxresdefault.jpg',
            'videoUrl' => 'https://www.youtube.com/embed/16vnBjstCE8',
        ],
        [
            'id' => 4,
            'title' => 'កញ្ញា ឆែម នីកា ជានិស្សិតឆ្នាំទី៣ ',
            'duration' => '18 នាទី',
            'videoId' => 'i-OdWO319e0',
            'description'=>'កញ្ញា ឆែម នីកា ជានិស្សិតឆ្នាំទី៣ មកពីមហាវិទ្យាល័យ ទំនាក់ទំនងអន្តរជាតិ នៃសាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ ដែលកញ្ញានឹងបកស្រាយក្រោមប្រធានបទ “ ការចែករំលែកបទពិសោធន៍ដែល ទាក់ទងនិង ការចូលរួមក្នុងកម្មវិធី  Binus Indo Pacific Forum ” នៅក្នុងកម្មវិធី BELTEI IU Talk ។',
            'thumbnail' => 'https://img.youtube.com/vi/i-OdWO319e0/maxresdefault.jpg',
            'videoUrl' => 'https://www.youtube.com/embed/i-OdWO319e0',
        ],
    ];

    public static function all($columns = ['*'])
    {
        return collect(self::$videos);
    }

    public static function find($id)
    {
        return collect(self::$videos)->firstWhere('id', $id);
    }
}