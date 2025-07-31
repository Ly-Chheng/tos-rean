<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Village;

class VilageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    // php artisan db:seed --class=VilageTableSeeder
    public function run(): void
    {
        $villages = [
            // Banteay Meanchey (province_id: 1)
            ['commune_id' => 1, 'user_id' => 1, 'name' => 'ភូមិទី១', 'status' => true],
            ['commune_id' => 1, 'user_id' => 1, 'name' => 'ភូមិទី២', 'status' => true],
            ['commune_id' => 1, 'user_id' => 1, 'name' => 'ភូមិទី៣', 'status' => true]
        ];

        foreach ($villages as $village) {
            Village::create($village);
        }
    }
}
