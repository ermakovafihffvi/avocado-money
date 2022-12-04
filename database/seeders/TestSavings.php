<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TestSavings extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        DB::table('savings')->insert([
            [
                'category_id' => '1', 
                'source_id' => '1', 
                'sum' => 1234,
                'created_at' => Carbon::createFromDate("2022", "02", "27", $now->timezoneName)
            ],
            [
                'category_id' => '1', 
                'source_id' => '1', 
                'sum' => 1234,
                'created_at' => Carbon::createFromDate("2022", "03", "27", $now->timezoneName)
            ],
            [
                'category_id' => '2', 
                'source_id' => '1', 
                'sum' => 1234,
                'created_at' => Carbon::createFromDate("2022", "03", "27", $now->timezoneName)
            ],
            [
                'category_id' => '2', 
                'source_id' => '2', 
                'sum' => 1234,
                'created_at' => Carbon::createFromDate("2022", "02", "27", $now->timezoneName)
            ]
        ]);
    }
}