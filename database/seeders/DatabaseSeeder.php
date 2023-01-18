<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            CategoryExp::class,
            CategorySavings::class,
            SavingSource::class,
            TestUser::class,
            //TestExpenses::class,
            //TestSavings::class,
            //TestIncome::class,
            TestUserGroup::class,
            TestUserToGroup::class
        ]);
    }
}
