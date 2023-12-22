<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Currency;
use App\Models\CategoryExp;
use App\Models\CategorySavings;

class CategoryExpCryptoAndCashe extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $currencyId = Currency::where("str_id", "USDT")->first()->id;
        CategoryExp::firstOrCreate([
            "title" => "BYBIT",
            "limit" => "infty",
            "isActive" => true,
            "str_id" => "cryptoBybit",
            "currency_id" => $currencyId,
            "desc" => ""
        ]);

        $dollarId = Currency::where("str_id", "USD")->first()->id;

        CategoryExp::firstOrCreate([
            "title" => "Dollar cash",
            "limit" => "infty",
            "isActive" => true,
            "str_id" => "dollarCash",
            "currency_id" => $dollarId,
            "desc" => ""
        ]);

        CategorySavings::firstOrCreate([
            "title" => "Dollar cash Alex",
            "limit" => 0,
            "str_id" => "dollarCashAlex",
            "currency_id" => $dollarId,
            "desc" => ""
        ]);

        CategorySavings::firstOrCreate([
            "title" => "Dollar cash Plusha",
            "limit" => 0,
            "str_id" => "dollarCashPlusha",
            "currency_id" => $dollarId,
            "desc" => ""
        ]);
    }
}