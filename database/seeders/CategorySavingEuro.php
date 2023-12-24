<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Currency;
use App\Models\CategorySavings;
use App\Models\CategoryExp;

class CategorySavingEuro extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $euro = Currency::where("str_id", "EUR")->first()->id;

        CategorySavings::firstOrCreate([
            "title" => "Euro cash Alex",
            "limit" => 0,
            "str_id" => "euroCashAlex",
            "currency_id" => $euro,
            "desc" => ""
        ]);

        CategorySavings::firstOrCreate([
            "title" => "Euro cash Plusha",
            "limit" => 0,
            "str_id" => "euroCashPlusha",
            "currency_id" => $euro,
            "desc" => ""
        ]);

        CategoryExp::firstOrCreate([
            "title" => "Euro cash Alex",
            "limit" => "infty",
            "isActive" => true,
            "str_id" => "euroCashAlex",
            "currency_id" => $euro,
            "desc" => "",
            "special" => true
        ]);

        CategoryExp::firstOrCreate([
            "title" => "Euro cash Plusha",
            "limit" => "infty",
            "isActive" => true,
            "str_id" => "euroCashPlusha",
            "currency_id" => $euro,
            "desc" => "",
            "special" => true
        ]);
    }
}