<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TestExpenses extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        DB::table('expenses')->insert([
            [
                'category_id' => '1', 
                'desc' => 'тапочки', 
                'user_id' => '1',
                'sum' => 1234,
                'created_at' => Carbon::createFromDate("2022", "02", "01", $now->timezoneName)
            ],
            [
                'category_id' => '2', 
                'desc' => 'тапочки', 
                'user_id' => '1',
                'sum' => 333,
                'created_at' => Carbon::createFromDate("2022", "03", "01", $now->timezoneName)
            ],
            [
                'category_id' => '2', 
                'desc' => 'тапочки', 
                'user_id' => '1',
                'sum' => 556,
                'created_at' => Carbon::createFromDate("2022", "02", "01", $now->timezoneName)
            ],
            [
                'category_id' => '1', 
                'desc' => 'игрушки', 
                'user_id' => '2',
                'sum' => 1277,
                'created_at' => Carbon::createFromDate("2022", "02", "02", $now->timezoneName)
            ],
            [
                'category_id' => '6', 
                'desc' => 'игрушки', 
                'user_id' => '2',
                'sum' => 377,
                'created_at' => Carbon::createFromDate("2022", "03", "02", $now->timezoneName)
            ],
            [
                'category_id' => '1', 
                'desc' => 'игрушки', 
                'user_id' => '2',
                'sum' => 557,
                'created_at' => Carbon::createFromDate("2022", "02", "02", $now->timezoneName)
            ],
            [
                'category_id' => '13', 
                'desc' => 'тапочки', 
                'user_id' => '1',
                'sum' => 556,
                'created_at' => Carbon::createFromDate("2022", "02", "01", $now->timezoneName)
            ],
            [
                'category_id' => '13', 
                'desc' => 'игрушки', 
                'user_id' => '2',
                'sum' => 1277,
                'created_at' => Carbon::createFromDate("2022", "02", "02", $now->timezoneName)
            ],
            [
                'category_id' => '14', 
                'desc' => 'тапочки', 
                'user_id' => '1',
                'sum' => 556,
                'created_at' => Carbon::createFromDate("2022", "02", "01", $now->timezoneName)
            ],
            [
                'category_id' => '15', 
                'desc' => 'игрушки', 
                'user_id' => '2',
                'sum' => 1277,
                'created_at' => Carbon::createFromDate("2022", "02", "02", $now->timezoneName)
            ],
        ]);
    }
}