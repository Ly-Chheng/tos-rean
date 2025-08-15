<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StrategyDetail extends Model
{
    protected static $strategyDetail =  [
    [
        'id' => 1,
        'image' => 'https://lh4.googleusercontent.com/proxy/4vvMqLP0qp9zdFdmPOuJvprYJjUsbOmQzv7hWEJFy7WOMbqPk6TNSyiIBcn6UFamshi6POrGCCSKDqITPf0NOeVTpFj9TPwP0LafpTiA2KUtLKc',
        'title' => 'កាតសិស្ស',
        'description' => 'កាតសិស្ស សម្រាប់សម្គាល់និស្សិត និងប្រើក្នុងសាលា។',
    ],
    [
        'id' => 2,
        'image' => 'https://media.makrocambodiaclick.com/PRODUCT_1615434713829.jpeg',
        'title' => 'ក្រដាស់ជូតមាត់',
        'description' => 'គួរយកក្រដាសទំហំតូច ក្នុងករណីផ្តាសាយ ឬត្រូវការជូតកន្លែងអង្គុយ ',
    ],
    [
        'id' => 3,
        'image' => 'https://homefixcambodia.com/cdn/shop/products/T07440_M.jpg?v=1748015843',
        'title' => 'បន្ទាត់',
        'description' => 'បន្ទាត់ សម្រាប់គូសបន្ទាត់ និងវាស់ទំហំ។',
    ],
    [
        'id' => 4,
        'image' => 'https://image.made-in-china.com/202f0j00DnpVJZqsSOzg/Transparent-Plastic-Cosmetic-Bag-Ladies-Handbags-Small-Travel-Makeup-Organizer-Bag.webp',
        'title' => 'កាបូបថ្លា',
        'description' => 'កាបូបថ្លា សម្រាប់ដាក់ឯកសារធំ ឬសម្ភារៈច្រើន។',
    ],
    [
        'id' => 5,
        'image' => 'https://i.ytimg.com/vi/82Q3LsnfK1Q/maxresdefault.jpg',
        'title' => 'សៀវភៅ',
        'description' => 'សៀវភៅ សម្រាប់អាន ឬត្រៀមប្រឡង។',
    ],
    [
        'id' => 6,
        'image' => 'https://helloartsy.com/wp-content/uploads/2014/09/white-eraser.jpg',
        'title' => 'ជ័រលុប',
        'description' => 'ជ័រលុប សម្រាប់កែតម្រូវការសរសេរ និងកំហុសក្នុងថ្នាក់។',
    ],
];


    public static function all($columns = ['*'])
    {
        return collect(self::$strategyDetail);
    }

    public static function find($id)
    {
        return collect(self::$strategyDetail)->firstWhere('id', $id);
    }
}
