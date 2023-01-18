<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySavings extends Seeder
{
    /**
     * Run the database seeds.
     *Важно расположиьт в порядке приоритета
     * @return void
     */
    public function run()
    {
        DB::table('category_savings')->insert([
            ['title' => 'на переезд', 'str_id' => 'moving', 'limit' => 30000],
            ['title' => 'на непредвиденные', 'str_id' => 'unexpected', 'limit' => 4100],
            ['title' => 'крупные траты', 'str_id' => 'bigexpenses', 'limit' => 0],
        ]);
    }
}
