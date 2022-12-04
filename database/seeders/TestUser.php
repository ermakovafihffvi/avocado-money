<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TestUser extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        DB::table('user')->insert([
            ['name' => 'Alex', 'email' => 'ff@mail.com', 'password' => '12345', 'created_at' => $now],
            ['name' => 'Vatnik', 'email' => 'fff@mail.com', 'password' => '12345', 'created_at' => $now]
        ]);
    }
}