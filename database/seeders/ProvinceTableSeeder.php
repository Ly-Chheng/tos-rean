<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProvinceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    // php artisan db:seed --class=ProvinceTableSeeder
    public function run(): void
    {
        $provinces = [
            'បន្ទាយមានជ័យ',
            'បាត់ដំបង',
            'កំពង់ចាម',
            'កំពង់ឆ្នាំង',
            'កំពង់ស្ពឺ',
            'កំពង់ធំ',
            'កំពត',
            'កណ្ដាល',
            'កែប',
            'កោះកុង',
            'ក្រចេះ',
            'មណ្ឌលគិរី',
            'ភ្នំពេញ',
            'ព្រះសីហនុ',
            'ព្រះវិហារ',
            'ពោធិ៍សាត់',
            'រតនគិរី',
            'សៀមរាប',
            'ស្ទឹងត្រែង',
            'ស្វាយរៀង',
            'តាកែវ',
            'ឧត្តរមានជ័យ',
            'ប៉ៃលិន',
            'ត្បូងឃ្មុំ',
            'ព្រៃវែង'
        ];

        foreach ($provinces as $name) {
            DB::table('provinces')->insert([
                'user_id' => 1,
                'name' => $name,
                'status' => true,
            ]);
        }
    }
}
