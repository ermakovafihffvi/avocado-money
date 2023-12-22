<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Currency;
use App\Models\CategoryExp;

class Valutes extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Currency::firstOrCreate(["title" => "ruble", "str_id" => "RUB"]);
        Currency::firstOrCreate(["title" => "dollar", "str_id" => "USD"]);
        Currency::firstOrCreate(["title" => "euro", "str_id" => "EUR"]);
        Currency::firstOrCreate(["title" => "crypto dollar", "str_id" => "USDT"]);
        Currency::firstOrCreate(["title" => "shekel", "str_id" => "ILS"]);

        $currencyId = Currency::where("str_id", "ILS")->first()->id;
        CategoryExp::get()->each(function ($category, int $key) use ($currencyId) {
            $category->currency_id = $currencyId;
            $category->save();
        });
    }
}