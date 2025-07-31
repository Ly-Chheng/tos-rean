<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Commune;

class CommunesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    // php artisan db:seed --class=CommunesTableSeeder
    public function run()
    {
        $communes = [
            // Mongkol Borei District (district_id: 1)
            ['district_id' => 1, 'user_id' => 1, 'name' => 'បន្ទាយនាង', 'status' => true],
            ['district_id' => 1, 'user_id' => 1, 'name' => 'បត់ត្រង់', 'status' => true],
            ['district_id' => 1, 'user_id' => 1, 'name' => 'ចំណោម', 'status' => true],
            ['district_id' => 1, 'user_id' => 1, 'name' => 'គោកបល្ល័ង្គ', 'status' => true],
            ['district_id' => 1, 'user_id' => 1, 'name' => 'គយម៉ែង', 'status' => true],
            ['district_id' => 1, 'user_id' => 1, 'name' => 'អូរប្រាសាទ', 'status' => true],
            ['district_id' => 1, 'user_id' => 1, 'name' => 'ភ្នំតូច', 'status' => true],
            ['district_id' => 1, 'user_id' => 1, 'name' => 'រហាត់ទឹក', 'status' => true],
            ['district_id' => 1, 'user_id' => 1, 'name' => 'ឫស្សីក្រោក', 'status' => true],
            ['district_id' => 1, 'user_id' => 1, 'name' => 'សំបួរ', 'status' => true],
            ['district_id' => 1, 'user_id' => 1, 'name' => 'សឿ', 'status' => true],
            ['district_id' => 1, 'user_id' => 1, 'name' => 'ស្រះរាំង', 'status' => true],
            ['district_id' => 1, 'user_id' => 1, 'name' => 'តាឡំ', 'status' => true],

            // Phnum Srok District (district_id: 2)
            ['district_id' => 2, 'user_id' => 1, 'name' => 'ណាំតៅ', 'status' => true],
            ['district_id' => 2, 'user_id' => 1, 'name' => 'ប៉ោយចារ', 'status' => true],
            ['district_id' => 2, 'user_id' => 1, 'name' => 'ពន្លៃ', 'status' => true],
            ['district_id' => 2, 'user_id' => 1, 'name' => 'ស្ពានស្រែង', 'status' => true],
            ['district_id' => 2, 'user_id' => 1, 'name' => 'ស្រះជីក', 'status' => true],
            ['district_id' => 2, 'user_id' => 1, 'name' => 'ភ្នំដី', 'status' => true],

            // Preah Netr Preah District (district_id: 3)
            ['district_id' => 3, 'user_id' => 1, 'name' => 'ឈ្នួរមានជ័យ', 'status' => true],
            ['district_id' => 3, 'user_id' => 1, 'name' => 'ជប់វារី', 'status' => true],
            ['district_id' => 3, 'user_id' => 1, 'name' => 'ភ្នំលៀប', 'status' => true],
            ['district_id' => 3, 'user_id' => 1, 'name' => 'ប្រាសាទ', 'status' => true],
            ['district_id' => 3, 'user_id' => 1, 'name' => 'ព្រះនេត្រព្រះ', 'status' => true],
            ['district_id' => 3, 'user_id' => 1, 'name' => 'រហាល', 'status' => true],
            ['district_id' => 3, 'user_id' => 1, 'name' => 'ទានកាំ', 'status' => true],
            ['district_id' => 3, 'user_id' => 1, 'name' => 'ទឹកជោរ', 'status' => true],
            ['district_id' => 3, 'user_id' => 1, 'name' => 'បុស្បូវ', 'status' => true],

            // Ou Chrov District (district_id: 4)
            ['district_id' => 4, 'user_id' => 1, 'name' => 'ចង្ហា', 'status' => true],
            ['district_id' => 4, 'user_id' => 1, 'name' => 'កូប', 'status' => true],
            ['district_id' => 4, 'user_id' => 1, 'name' => 'គុត្ដសត', 'status' => true],
            ['district_id' => 4, 'user_id' => 1, 'name' => 'សំរោង', 'status' => true],
            ['district_id' => 4, 'user_id' => 1, 'name' => 'សូភី', 'status' => true],
            ['district_id' => 4, 'user_id' => 1, 'name' => 'សឹង្ហ', 'status' => true],
            ['district_id' => 4, 'user_id' => 1, 'name' => 'អូរបីជាន់', 'status' => true],

            // Serei Saophoan Municipality (district_id: 5)
            ['district_id' => 5, 'user_id' => 1, 'name' => 'កំពង់ស្វាយ', 'status' => true],
            ['district_id' => 5, 'user_id' => 1, 'name' => 'កោះពងសត្វ', 'status' => true],
            ['district_id' => 5, 'user_id' => 1, 'name' => 'ម្កាក់', 'status' => true],
            ['district_id' => 5, 'user_id' => 1, 'name' => 'អូរអំបិល', 'status' => true],
            ['district_id' => 5, 'user_id' => 1, 'name' => 'ភ្នៀត', 'status' => true],
            ['district_id' => 5, 'user_id' => 1, 'name' => 'ព្រះពន្លា', 'status' => true],
            ['district_id' => 5, 'user_id' => 1, 'name' => 'ទឹកថ្លា', 'status' => true],

            // Thma Puok District (district_id: 6)
            ['district_id' => 6, 'user_id' => 1, 'name' => 'បន្ទាយឆ្មារ', 'status' => true],
            ['district_id' => 6, 'user_id' => 1, 'name' => 'គោករមៀត', 'status' => true],
            ['district_id' => 6, 'user_id' => 1, 'name' => 'ភូមិថ្មី', 'status' => true],
            ['district_id' => 6, 'user_id' => 1, 'name' => 'ថ្មពួក', 'status' => true],
            ['district_id' => 6, 'user_id' => 1, 'name' => 'គោកកឋិន', 'status' => true],
            ['district_id' => 6, 'user_id' => 1, 'name' => 'គំរូ', 'status' => true],

            // Svay Chek District (district_id: 7)
            ['district_id' => 7, 'user_id' => 1, 'name' => 'ផ្គាំ', 'status' => true],
            ['district_id' => 7, 'user_id' => 1, 'name' => 'សារង្គ', 'status' => true],
            ['district_id' => 7, 'user_id' => 1, 'name' => 'ស្លក្រាម', 'status' => true],
            ['district_id' => 7, 'user_id' => 1, 'name' => 'ស្វាយចេក', 'status' => true],
            ['district_id' => 7, 'user_id' => 1, 'name' => 'តាបែន', 'status' => true],
            ['district_id' => 7, 'user_id' => 1, 'name' => 'តាផូ', 'status' => true],
            ['district_id' => 7, 'user_id' => 1, 'name' => 'ទ្រាស', 'status' => true],
            ['district_id' => 7, 'user_id' => 1, 'name' => 'រលួស', 'status' => true],

            // Malai District (district_id: 8)
            ['district_id' => 8, 'user_id' => 1, 'name' => 'បឹងបេង', 'status' => true],
            ['district_id' => 8, 'user_id' => 1, 'name' => 'ម៉ាឡៃ', 'status' => true],
            ['district_id' => 8, 'user_id' => 1, 'name' => 'អូរសំព័រ', 'status' => true],
            ['district_id' => 8, 'user_id' => 1, 'name' => 'អូរស្រឡៅ', 'status' => true],
            ['district_id' => 8, 'user_id' => 1, 'name' => 'ទួលពង្រ', 'status' => true],
            ['district_id' => 8, 'user_id' => 1, 'name' => 'តាគង់', 'status' => true],

            // Paoy Paet Municipality (district_id: 9)
            ['district_id' => 9, 'user_id' => 1, 'name' => 'និមិត្ដ', 'status' => true],
            ['district_id' => 9, 'user_id' => 1, 'name' => 'ប៉ោយប៉ែត', 'status' => true],
            ['district_id' => 9, 'user_id' => 1, 'name' => 'ផ្សារកណ្តាល', 'status' => true],
            ['district_id' => 9, 'user_id' => 1, 'name' => 'អូរជ្រៅ', 'status' => true],
            ['district_id' => 9, 'user_id' => 1, 'name' => 'អូរឫស្សី', 'status' => true],
        ];

        foreach ($communes as $commune) {
            Commune::create($commune);
        }
    }
}