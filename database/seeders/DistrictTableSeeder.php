<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\District;

class DistrictTableSeeder extends Seeder
{
    // php artisan db:seed --class=DistrictTableSeeder
    public function run()
    {
        $districts = [
            // Banteay Meanchey (province_id: 1)
            ['province_id' => 1, 'user_id' => 1, 'name' => 'មង្គលបូរី', 'status' => true],
            ['province_id' => 1, 'user_id' => 1, 'name' => 'ភ្នំស្រុក', 'status' => true],
            ['province_id' => 1, 'user_id' => 1, 'name' => 'ព្រះនេត្រព្រះ', 'status' => true],
            ['province_id' => 1, 'user_id' => 1, 'name' => 'អូរជ្រៅ', 'status' => true],
            ['province_id' => 1, 'user_id' => 1, 'name' => 'សិរីសោភ័ណ', 'status' => true],
            ['province_id' => 1, 'user_id' => 1, 'name' => 'ថ្មពួក', 'status' => true],
            ['province_id' => 1, 'user_id' => 1, 'name' => 'ស្វាយចេក', 'status' => true],
            ['province_id' => 1, 'user_id' => 1, 'name' => 'ម៉ាឡៃ', 'status' => true],
            ['province_id' => 1, 'user_id' => 1, 'name' => 'ប៉ោយប៉ែត', 'status' => true],

            // Battambang (province_id: 2)
            ['province_id' => 2, 'user_id' => 1, 'name' => 'បាណន់', 'status' => true],
            ['province_id' => 2, 'user_id' => 1, 'name' => 'ថ្មគោល', 'status' => true],
            ['province_id' => 2, 'user_id' => 1, 'name' => 'បាត់ដំបង', 'status' => true],
            ['province_id' => 2, 'user_id' => 1, 'name' => 'បវេល', 'status' => true],
            ['province_id' => 2, 'user_id' => 1, 'name' => 'ឯកភ្នំ', 'status' => true],
            ['province_id' => 2, 'user_id' => 1, 'name' => 'មោងឫស្សី', 'status' => true],
            ['province_id' => 2, 'user_id' => 1, 'name' => 'រតនមណ្ឌល', 'status' => true],
            ['province_id' => 2, 'user_id' => 1, 'name' => 'សង្កែ', 'status' => true],
            ['province_id' => 2, 'user_id' => 1, 'name' => 'សំឡូត', 'status' => true],
            ['province_id' => 2, 'user_id' => 1, 'name' => 'សំពៅលូន', 'status' => true],
            ['province_id' => 2, 'user_id' => 1, 'name' => 'ភ្នំព្រឹក', 'status' => true],
            ['province_id' => 2, 'user_id' => 1, 'name' => 'កំរៀង', 'status' => true],
            ['province_id' => 2, 'user_id' => 1, 'name' => 'គាស់ក្រឡ', 'status' => true],
            ['province_id' => 2, 'user_id' => 1, 'name' => 'រុក្ខគិរី', 'status' => true],

            // Kampong Cham (province_id: 3)
            ['province_id' => 3, 'user_id' => 1, 'name' => 'បាធាយ', 'status' => true],
            ['province_id' => 3, 'user_id' => 1, 'name' => 'ចំការលើ', 'status' => true],
            ['province_id' => 3, 'user_id' => 1, 'name' => 'ជើងព្រៃ', 'status' => true],
            ['province_id' => 3, 'user_id' => 1, 'name' => 'កំពង់ចាម', 'status' => true],
            ['province_id' => 3, 'user_id' => 1, 'name' => 'កំពង់សៀម', 'status' => true],
            ['province_id' => 3, 'user_id' => 1, 'name' => 'កងមាស', 'status' => true],
            ['province_id' => 3, 'user_id' => 1, 'name' => 'កោះសូទិន', 'status' => true],
            ['province_id' => 3, 'user_id' => 1, 'name' => 'ព្រៃឈរ', 'status' => true],
            ['province_id' => 3, 'user_id' => 1, 'name' => 'ស្រីសន្ធរ', 'status' => true],
            ['province_id' => 3, 'user_id' => 1, 'name' => 'ស្ទឹងត្រង់', 'status' => true],

            // Kampong Chhnang (province_id: 4)
            ['province_id' => 4, 'user_id' => 1, 'name' => 'បរិបូណ៌', 'status' => true],
            ['province_id' => 4, 'user_id' => 1, 'name' => 'ជលគីរី', 'status' => true],
            ['province_id' => 4, 'user_id' => 1, 'name' => 'កំពង់ឆ្នាំង', 'status' => true],
            ['province_id' => 4, 'user_id' => 1, 'name' => 'កំពង់លែង', 'status' => true],
            ['province_id' => 4, 'user_id' => 1, 'name' => 'កំពង់ត្រឡាច', 'status' => true],
            ['province_id' => 4, 'user_id' => 1, 'name' => 'រលាប្អៀរ', 'status' => true],
            ['province_id' => 4, 'user_id' => 1, 'name' => 'សាមគ្គីមានជ័យ', 'status' => true],
            ['province_id' => 4, 'user_id' => 1, 'name' => 'ទឹកផុស', 'status' => true],

            // Kampong Speu (province_id: 5)
            ['province_id' => 5, 'user_id' => 1, 'name' => 'បរសេដ្ឋ', 'status' => true],
            ['province_id' => 5, 'user_id' => 1, 'name' => 'ច្បារមន', 'status' => true],
            ['province_id' => 5, 'user_id' => 1, 'name' => 'គងពិសី', 'status' => true],
            ['province_id' => 5, 'user_id' => 1, 'name' => 'ឱរ៉ាល់', 'status' => true],
            ['province_id' => 5, 'user_id' => 1, 'name' => 'ភ្នំស្រួច', 'status' => true],
            ['province_id' => 5, 'user_id' => 1, 'name' => 'សំរោងទង', 'status' => true],
            ['province_id' => 5, 'user_id' => 1, 'name' => 'ថ្ពង', 'status' => true],
            ['province_id' => 5, 'user_id' => 1, 'name' => 'ឧដុង្គម៉ែជ័យ', 'status' => true],
            ['province_id' => 5, 'user_id' => 1, 'name' => 'សាមគ្គីមុនីជ័យ', 'status' => true],

            // Kampong Thom (province_id: 6)
            ['province_id' => 6, 'user_id' => 1, 'name' => 'បារាយណ៍', 'status' => true],
            ['province_id' => 6, 'user_id' => 1, 'name' => 'កំពង់ស្វាយ', 'status' => true],
            ['province_id' => 6, 'user_id' => 1, 'name' => 'ស្ទឹងសែន', 'status' => true],
            ['province_id' => 6, 'user_id' => 1, 'name' => 'ប្រាសាទបល្ល័ង្គ', 'status' => true],
            ['province_id' => 6, 'user_id' => 1, 'name' => 'ប្រាសាទសំបូរ', 'status' => true],
            ['province_id' => 6, 'user_id' => 1, 'name' => 'សណ្ដាន់', 'status' => true],
            ['province_id' => 6, 'user_id' => 1, 'name' => 'សន្ទុក', 'status' => true],
            ['province_id' => 6, 'user_id' => 1, 'name' => 'ស្ទោង', 'status' => true],
            ['province_id' => 6, 'user_id' => 1, 'name' => 'តាំងគោក', 'status' => true],

            // Kampot (province_id: 7)
            ['province_id' => 7, 'user_id' => 1, 'name' => 'អង្គរជ័យ', 'status' => true],
            ['province_id' => 7, 'user_id' => 1, 'name' => 'បន្ទាយមាស', 'status' => true],
            ['province_id' => 7, 'user_id' => 1, 'name' => 'ឈូក', 'status' => true],
            ['province_id' => 7, 'user_id' => 1, 'name' => 'ជុំគិរី', 'status' => true],
            ['province_id' => 7, 'user_id' => 1, 'name' => 'ដងទង់', 'status' => true],
            ['province_id' => 7, 'user_id' => 1, 'name' => 'កំពង់ត្រាច', 'status' => true],
            ['province_id' => 7, 'user_id' => 1, 'name' => 'ទឹកឈូ', 'status' => true],
            ['province_id' => 7, 'user_id' => 1, 'name' => 'កំពត', 'status' => true],
            ['province_id' => 7, 'user_id' => 1, 'name' => 'បូកគោ', 'status' => true],

            // Kandal (province_id: 8)
            ['province_id' => 8, 'user_id' => 1, 'name' => 'កណ្ដាលស្ទឹង', 'status' => true],
            ['province_id' => 8, 'user_id' => 1, 'name' => 'កៀនស្វាយ', 'status' => true],
            ['province_id' => 8, 'user_id' => 1, 'name' => 'ខ្សាច់កណ្ដាល', 'status' => true],
            ['province_id' => 8, 'user_id' => 1, 'name' => 'កោះធំ', 'status' => true],
            ['province_id' => 8, 'user_id' => 1, 'name' => 'លើកដែក', 'status' => true],
            ['province_id' => 8, 'user_id' => 1, 'name' => 'ល្វាឯម', 'status' => true],
            ['province_id' => 8, 'user_id' => 1, 'name' => 'មុខកំពូល', 'status' => true],
            ['province_id' => 8, 'user_id' => 1, 'name' => 'អង្គស្នួល', 'status' => true],
            ['province_id' => 8, 'user_id' => 1, 'name' => 'ពញាឮ', 'status' => true],
            ['province_id' => 8, 'user_id' => 1, 'name' => 'ស្អាង', 'status' => true],
            ['province_id' => 8, 'user_id' => 1, 'name' => 'តាខ្មៅ', 'status' => true],
            ['province_id' => 8, 'user_id' => 1, 'name' => 'សំពៅពូន', 'status' => true],
            ['province_id' => 8, 'user_id' => 1, 'name' => 'អរិយក្សត្រ', 'status' => true],

            // Kep (province_id: 9)
            ['province_id' => 9, 'user_id' => 1, 'name' => 'ដំណាក់ចង្អើរ', 'status' => true],
            ['province_id' => 9, 'user_id' => 1, 'name' => 'កែប', 'status' => true],

            // Koh Kong (province_id: 10)
            ['province_id' => 10, 'user_id' => 1, 'name' => 'បុទុមសាគរ', 'status' => true],
            ['province_id' => 10, 'user_id' => 1, 'name' => 'គិរីសាគរ', 'status' => true],
            ['province_id' => 10, 'user_id' => 1, 'name' => 'កោះកុង', 'status' => true],
            ['province_id' => 10, 'user_id' => 1, 'name' => 'ខេមរភូមិន្ទ', 'status' => true],
            ['province_id' => 10, 'user_id' => 1, 'name' => 'មណ្ឌលសីមា', 'status' => true],
            ['province_id' => 10, 'user_id' => 1, 'name' => 'ស្រែ អំបិល', 'status' => true],
            ['province_id' => 10, 'user_id' => 1, 'name' => 'ថ្មបាំង', 'status' => true],

            // Kratié (province_id: 11)
            ['province_id' => 11, 'user_id' => 1, 'name' => 'ឆ្លូង', 'status' => true],
            ['province_id' => 11, 'user_id' => 1, 'name' => 'ក្រចេះ', 'status' => true],
            ['province_id' => 11, 'user_id' => 1, 'name' => 'ព្រែកប្រសព្វ', 'status' => true],
            ['province_id' => 11, 'user_id' => 1, 'name' => 'សំបូរ', 'status' => true],
            ['province_id' => 11, 'user_id' => 1, 'name' => 'ស្នួល', 'status' => true],
            ['province_id' => 11, 'user_id' => 1, 'name' => 'ចិត្របុរី', 'status' => true],
            ['province_id' => 11, 'user_id' => 1, 'name' => 'អូរគ្រៀងសែនជ័យ', 'status' => true],

            // Mondulkiri (province_id: 12)
            ['province_id' => 12, 'user_id' => 1, 'name' => 'កែវសីមា', 'status' => true],
            ['province_id' => 12, 'user_id' => 1, 'name' => 'កោះញែក', 'status' => true],
            ['province_id' => 12, 'user_id' => 1, 'name' => 'អូររាំង', 'status' => true],
            ['province_id' => 12, 'user_id' => 1, 'name' => 'ពេជ្រាដា', 'status' => true],
            ['province_id' => 12, 'user_id' => 1, 'name' => 'សែនមនោរម្យ', 'status' => true],

            // Phnom Penh (province_id: 13)
            ['province_id' => 13, 'user_id' => 1, 'name' => 'ចំការមន', 'status' => true],
            ['province_id' => 13, 'user_id' => 1, 'name' => 'ដូនពេញ', 'status' => true],
            ['province_id' => 13, 'user_id' => 1, 'name' => '៧មករា', 'status' => true],
            ['province_id' => 13, 'user_id' => 1, 'name' => 'ទួលគោក', 'status' => true],
            ['province_id' => 13, 'user_id' => 1, 'name' => 'ដង្កោ', 'status' => true],
            ['province_id' => 13, 'user_id' => 1, 'name' => 'មានជ័យ', 'status' => true],
            ['province_id' => 13, 'user_id' => 1, 'name' => 'ឫស្សីកែវ', 'status' => true],
            ['province_id' => 13, 'user_id' => 1, 'name' => 'សែនសុខ', 'status' => true],
            ['province_id' => 13, 'user_id' => 1, 'name' => 'ពោធិ៍សែនជ័យ', 'status' => true],
            ['province_id' => 13, 'user_id' => 1, 'name' => 'ជ្រោយចង្វារ', 'status' => true],
            ['province_id' => 13, 'user_id' => 1, 'name' => 'ព្រែកព្នៅ', 'status' => true],
            ['province_id' => 13, 'user_id' => 1, 'name' => 'ច្បារអំពៅ', 'status' => true],
            ['province_id' => 13, 'user_id' => 1, 'name' => 'បឹងកេងកង', 'status' => true],
            ['province_id' => 13, 'user_id' => 1, 'name' => 'កំបូល', 'status' => true],

            // Preah Sihanouk (province_id: 14)
            ['province_id' => 14, 'user_id' => 1, 'name' => 'ព្រះសីហនុ', 'status' => true],
            ['province_id' => 14, 'user_id' => 1, 'name' => 'ព្រៃនប់', 'status' => true],
            ['province_id' => 14, 'user_id' => 1, 'name' => 'ស្ទឹងហាវ', 'status' => true],
            ['province_id' => 14, 'user_id' => 1, 'name' => 'កំពង់សីលា', 'status' => true],
            ['province_id' => 14, 'user_id' => 1, 'name' => 'កោះរ៉ុង', 'status' => true],
            ['province_id' => 14, 'user_id' => 1, 'name' => 'កំពង់សោម', 'status' => true],

            // Preah Vihear (province_id: 15)
            ['province_id' => 15, 'user_id' => 1, 'name' => 'ជ័យសែន', 'status' => true],
            ['province_id' => 15, 'user_id' => 1, 'name' => 'ឆែប', 'status' => true],
            ['province_id' => 15, 'user_id' => 1, 'name' => 'ជាំក្សាន្ដ', 'status' => true],
            ['province_id' => 15, 'user_id' => 1, 'name' => 'គូលែន', 'status' => true],
            ['province_id' => 15, 'user_id' => 1, 'name' => 'រវៀង', 'status' => true],
            ['province_id' => 15, 'user_id' => 1, 'name' => 'សង្គមថ្មី', 'status' => true],
            ['province_id' => 15, 'user_id' => 1, 'name' => 'ត្បែងមានជ័យ', 'status' => true],
            ['province_id' => 15, 'user_id' => 1, 'name' => 'ព្រះវិហារ', 'status' => true],

            // Pursat (province_id: 16)
            ['province_id' => 16, 'user_id' => 1, 'name' => 'បាកាន', 'status' => true],
            ['province_id' => 16, 'user_id' => 1, 'name' => 'កណ្ដៀង', 'status' => true],
            ['province_id' => 16, 'user_id' => 1, 'name' => 'ក្រគរ', 'status' => true],
            ['province_id' => 16, 'user_id' => 1, 'name' => 'ភ្នំក្រវ៉ាញ', 'status' => true],
            ['province_id' => 1, 'user_id' => 1, 'name' => 'ពោធិ៍សាត់', 'status' => true],
            ['province_id' => 16, 'user_id' => 1, 'name' => 'វាលវែង', 'status' => true],
            ['province_id' => 16, 'user_id' => 1, 'name' => 'តាលោសែនជ័យ', 'status' => true],

            // Ratanakiri (province_id: 17)
            ['province_id' => 17, 'user_id' => 1, 'name' => 'អណ្ដូងមាស', 'status' => true],
            ['province_id' => 17, 'user_id' => 1, 'name' => 'បានលុង', 'status' => true],
            ['province_id' => 17, 'user_id' => 1, 'name' => 'បរកែវ', 'status' => true],
            ['province_id' => 17, 'user_id' => 1, 'name' => 'កូនមុំ', 'status' => true],
            ['province_id' => 17, 'user_id' => 1, 'name' => 'លំផាត់', 'status' => true],
            ['province_id' => 17, 'user_id' => 1, 'name' => 'អូរជុំ', 'status' => true],
            ['province_id' => 17, 'user_id' => 1, 'name' => 'អូរយ៉ាដាវ', 'status' => true],
            ['province_id' => 17, 'user_id' => 1, 'name' => 'តាវែង', 'status' => true],
            ['province_id' => 17, 'user_id' => 1, 'name' => 'វើនសៃ', 'status' => true],

            // Siem Reap (province_id: 18)
            ['province_id' => 18, 'user_id' => 1, 'name' => 'អង្គរជុំ', 'status' => true],
            ['province_id' => 18, 'user_id' => 1, 'name' => 'អង្គរធំ', 'status' => true],
            ['province_id' => 18, 'user_id' => 1, 'name' => 'បន្ទាយស្រី', 'status' => true],
            ['province_id' => 18, 'user_id' => 1, 'name' => 'ជីក្រែង', 'status' => true],
            ['province_id' => 18, 'user_id' => 1, 'name' => 'ក្រឡាញ់', 'status' => true],
            ['province_id' => 18, 'user_id' => 1, 'name' => 'ពួក', 'status' => true],
            ['province_id' => 18, 'user_id' => 1, 'name' => 'ប្រាសាទបាគង', 'status' => true],
            ['province_id' => 18, 'user_id' => 1, 'name' => 'សៀមរាប', 'status' => true],
            ['province_id' => 18, 'user_id' => 1, 'name' => 'សូទ្រនិគម', 'status' => true],
            ['province_id' => 18, 'user_id' => 1, 'name' => 'ស្រីស្នំ', 'status' => true],
            ['province_id' => 18, 'user_id' => 1, 'name' => 'ស្វាយលើ', 'status' => true],
            ['province_id' => 18, 'user_id' => 1, 'name' => 'វ៉ារិន', 'status' => true],
            ['province_id' => 18, 'user_id' => 1, 'name' => 'រុនតាឯកតេជោសែន', 'status' => true],

            // Stung Treng (province_id: 19)
            ['province_id' => 19, 'user_id' => 1, 'name' => 'សេសាន', 'status' => true],
            ['province_id' => 19, 'user_id' => 1, 'name' => 'សៀមបូក', 'status' => true],
            ['province_id' => 19, 'user_id' => 1, 'name' => 'សៀមប៉ាង', 'status' => true],
            ['province_id' => 19, 'user_id' => 1, 'name' => 'ស្ទឹងត្រែង', 'status' => true],
            ['province_id' => 19, 'user_id' => 1, 'name' => 'ថាឡាបរិវ៉ាត់', 'status' => true],
            ['province_id' => 19, 'user_id' => 1, 'name' => 'បុរីអូរស្វាយសែនជ័យ', 'status' => true],

            // Svay Rieng (province_id: 20)
            ['province_id' => 20, 'user_id' => 1, 'name' => 'ចន្ទ្រា', 'status' => true],
            ['province_id' => 20, 'user_id' => 1, 'name' => 'កំពង់រោទិ៍', 'status' => true],
            ['province_id' => 20, 'user_id' => 1, 'name' => 'រំដួល', 'status' => true],
            ['province_id' => 20, 'user_id' => 1, 'name' => 'រមាសហែក', 'status' => true],
            ['province_id' => 20, 'user_id' => 1, 'name' => 'ស្វាយជ្រំ', 'status' => true],
            ['province_id' => 20, 'user_id' => 1, 'name' => 'ស្វាយរៀង', 'status' => true],
            ['province_id' => 20, 'user_id' => 1, 'name' => 'ស្វាយទាប', 'status' => true],
            ['province_id' => 20, 'user_id' => 1, 'name' => 'បាវិត', 'status' => true],

            // Takéo (province_id: 21)
            ['province_id' => 21, 'user_id' => 1, 'name' => 'អង្គរបូរី', 'status' => true],
            ['province_id' => 21, 'user_id' => 1, 'name' => 'បាទី', 'status' => true],
            ['province_id' => 21, 'user_id' => 1, 'name' => 'បូរីជលសារ', 'status' => true],
            ['province_id' => 21, 'user_id' => 1, 'name' => 'គីរីវង់', 'status' => true],
            ['province_id' => 21, 'user_id' => 1, 'name' => 'កោះអណ្ដែត', 'status' => true],
            ['province_id' => 21, 'user_id' => 1, 'name' => 'ព្រៃកប្បាស', 'status' => true],
            ['province_id' => 21, 'user_id' => 1, 'name' => 'សំរោង', 'status' => true],
            ['province_id' => 21, 'user_id' => 1, 'name' => 'ដូនកែវ', 'status' => true],
            ['province_id' => 21, 'user_id' => 1, 'name' => 'ត្រាំកក់', 'status' => true],
            ['province_id' => 21, 'user_id' => 1, 'name' => 'ទ្រាំង', 'status' => true],

            // Oddar Meanchey (province_id: 22)
            ['province_id' => 22, 'user_id' => 1, 'name' => 'អន្លង់វែង', 'status' => true],
            ['province_id' => 22, 'user_id' => 1, 'name' => 'បន្ទាយអំពិល', 'status' => true],
            ['province_id' => 22, 'user_id' => 1, 'name' => 'ចុងកាល់', 'status' => true],
            ['province_id' => 22, 'user_id' => 1, 'name' => 'សំរោង', 'status' => true],
            ['province_id' => 22, 'user_id' => 1, 'name' => 'ត្រពាំងប្រាសាទ', 'status' => true],

            // Pailin (province_id: 23)
            ['province_id' => 23, 'user_id' => 1, 'name' => 'ប៉ៃលិន', 'status' => true],
            ['province_id' => 23, 'user_id' => 1, 'name' => 'សាលាក្រៅ', 'status' => true],

            // Tboung Khmum (province_id: 24)
            ['province_id' => 24, 'user_id' => 1, 'name' => 'តំបែរ', 'status' => true],
            ['province_id' => 24, 'user_id' => 1, 'name' => 'ក្រូចឆ្មារ', 'status' => true],
            ['province_id' => 24, 'user_id' => 1, 'name' => 'មេមត់', 'status' => true],
            ['province_id' => 24, 'user_id' => 1, 'name' => 'អូររាំងឪ', 'status' => true],
            ['province_id' => 24, 'user_id' => 1, 'name' => 'ពញាក្រែក', 'status' => true],
            ['province_id' => 24, 'user_id' => 1, 'name' => 'សួង', 'status' => true],
            ['province_id' => 24, 'user_id' => 1, 'name' => 'ត្បូងឃ្មុំ', 'status' => true],

            // Prey Veng (province_id: 25)
            ['province_id' => 25, 'user_id' => 1, 'name' => 'បាភ្នំ', 'status' => true],
            ['province_id' => 25, 'user_id' => 1, 'name' => 'កំចាយមារ', 'status' => true],
            ['province_id' => 25, 'user_id' => 1, 'name' => 'កំពង់ត្របែក', 'status' => true],
            ['province_id' => 25, 'user_id' => 1, 'name' => 'កញ្ជ្រៀច', 'status' => true],
            ['province_id' => 25, 'user_id' => 1, 'name' => 'មេសាង', 'status' => true],
            ['province_id' => 25, 'user_id' => 1, 'name' => 'ពាមជរ', 'status' => true],
            ['province_id' => 25, 'user_id' => 1, 'name' => 'ពាមរក៍', 'status' => true],
            ['province_id' => 25, 'user_id' => 1, 'name' => 'ពារាំង', 'status' => true],
            ['province_id' => 25, 'user_id' => 1, 'name' => 'ព្រះស្ដេច', 'status' => true],
            ['province_id' => 25, 'user_id' => 1, 'name' => 'ព្រៃវែង', 'status' => true],
            ['province_id' => 25, 'user_id' => 1, 'name' => 'ពោធិ៍រៀង', 'status' => true],
            ['province_id' => 25, 'user_id' => 1, 'name' => 'ស៊ីធរកណ្ដាល', 'status' => true],
            ['province_id' => 25, 'user_id' => 1, 'name' => 'ស្វាយអន្ទរ', 'status' => true],
        ];

        foreach ($districts as $district) {
            District::create($district);
        }
    }
}