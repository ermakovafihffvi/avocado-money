<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SavingSource extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('saving_source')->insert([
            ['title' => 'отложенно', 'str_id' => 'saved'],
            ['title' => 'проценты', 'str_id' => 'procent'],
            ['title' => 'крупные подарки', 'str_id' => 'present'],
        ]);
    }
}
