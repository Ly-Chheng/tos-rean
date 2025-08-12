<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class Banner extends Model
{
    protected static $banners = [
        [
            'id' => 1,
            'image' => 'https://marketplace.canva.com/EAFykctpvKc/1/0/1600w/canva-green-bold-welcome-to-classroom-banner-PMuOP0_uHdg.jpg',
        ],
        [
            'id' => 2,
            'image' => 'https://marketplace.canva.com/EAFE52OF_eA/1/0/1600w/canva-blue-illustrated-welcome-to-our-classroom-banner-ee10Bxg8718.jpg',
        ],
        [
            'id' => 3,
            'image' => 'https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/white-and-grape-kid-creative-school-banner-template-0ygyd5151bb7c8.webp',
        ],
    ];
    
    public static function all($columns = ['*'])
    {
        return collect(self::$banners);
    }

    public static function find($id)
    {
        return collect(self::$banners)->firstWhere('id', $id);
    }
}