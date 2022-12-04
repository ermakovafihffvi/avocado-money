<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TestIncome extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        DB::table('income')->insert([
            [
                'user_id' => '1', 
                'desc' => 'зарплата', 
                'sum' => '12345', 
                'created_at' => Carbon::createFromDate("2022", "08", "13", $now->timezoneName)
            ],
            [
                'user_id' => '1', 
                'desc' => 'зарплата', 
                'sum' => '17345', 
                'created_at' => Carbon::createFromDate("2022", "08", "28", $now->timezoneName)
            ],
            [
                'user_id' => '2', 
                'desc' => 'стипендия', 
                'sum' => '12000', 
                'created_at' => Carbon::createFromDate("2022", "08", "01", $now->timezoneName)
            ],
            [
                'user_id' => '2', 
                'desc' => 'зарплата', 
                'sum' => '15000', 
                'created_at' => Carbon::createFromDate("2022", "08", "20", $now->timezoneName)
            ]
        ]);
    }
}