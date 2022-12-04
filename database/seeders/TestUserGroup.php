<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TestUserGroup extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        DB::table('user_group')->insert([
            ['admin_id' => 1, 'name' => 'avocado', 'password' => 'fihffvi', 'created_at' => $now],
            ['admin_id' => 2, 'name' => 'test_gr', 'password' => 'eee', 'created_at' => $now]
        ]);
    }
}