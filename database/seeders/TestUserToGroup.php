<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TestUserToGroup extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        DB::table('user_to_group')->insert([
            ['user_id' => 1, 'group_id' => 1],
            ['user_id' => 2, 'group_id' => 1],
            ['user_id' => 2, 'group_id' => 2],
            ['user_id' => 1, 'group_id' => 2]
        ]);
    }
}