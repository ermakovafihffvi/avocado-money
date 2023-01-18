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
            ['name' => 'Alex', 'email' => 'ff@mail.com', 'password' => '$2y$10$Wjmit/sWXnXXwgB6ZSySaOYyLZCX7B5pe7.2fLv.H1YWXbRrbPS3a', 'created_at' => $now],
            ['name' => 'Plusha', 'email' => 'fff@mail.com', 'password' => '$2y$10$VzoVxqfiCUJR/feDNBZ/DORcsMKjC/41cNONH/1Ra.2ig2OEjJ3bK', 'created_at' => $now]
        ]);
    }
}