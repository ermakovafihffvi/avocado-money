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
            "title" => "BYBIT Alex",
            "limit" => "infty",
            "isActive" => true,
            "str_id" => "cryptoAlex",
            "currency_id" => $currencyId,
            "desc" => "",
            "special" => true
        ]);

        CategoryExp::firstOrCreate([
            "title" => "BYBIT Plusha",
            "limit" => "infty",
            "isActive" => true,
            "str_id" => "cryptoPlusha",
            "currency_id" => $currencyId,
            "desc" => "",
            "special" => true
        ]);

        $dollarId = Currency::where("str_id", "USD")->first()->id;

        CategoryExp::firstOrCreate([
            "title" => "Dollar cash Alex",
            "limit" => "infty",
            "isActive" => true,
            "str_id" => "dollarCashAlex",
            "currency_id" => $dollarId,
            "desc" => "",
            "special" => true
        ]);

        CategoryExp::firstOrCreate([
            "title" => "Dollar cash Plusha",
            "limit" => "infty",
            "isActive" => true,
            "str_id" => "dollarCashPlusha",
            "currency_id" => $dollarId,
            "desc" => "",
            "special" => true
        ]);

        $shek = Currency::where("str_id", "ILS")->first()->id;

        CategoryExp::firstOrCreate([
            "title" => "Shekel cash Alex",
            "limit" => 0,
            "str_id" => "shekelAlex",
            "currency_id" => $shek,
            "desc" => "",
            "special" => true,
            "isActive" => true,
        ]);

        CategoryExp::firstOrCreate([
            "title" => "Shekel cach Plusha",
            "limit" => 0,
            "str_id" => "shekelPlusha",
            "currency_id" => $shek,
            "desc" => "",
            "special" => true,
            "isActive" => true,
        ]);
    }
}