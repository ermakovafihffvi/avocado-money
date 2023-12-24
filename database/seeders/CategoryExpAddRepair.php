<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\CategoryExp;

class CategoryExpAddRepair extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CategoryExp::firstOrCreate([
            'title' => 'ремонт', 'str_id' => 'repairing', 'limit' => 0, 'isActive' => false
        ]);
    }
}