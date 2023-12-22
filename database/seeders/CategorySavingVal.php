<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Currency;
use App\Models\CategorySavings;

class CategorySavingVal extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $rubleId = Currency::where("str_id", "RUB")->first()->id;
        $usdtId = Currency::where("str_id", "USDT")->first()->id;

        CategorySavings::get()->each(function ($category, int $key) use ($rubleId) {
            $category->currency_id = $rubleId;
            $category->save();
        });

        CategorySavings::firstOrCreate([
            "title" => "BYBIT Alex",
            "limit" => 0,
            "str_id" => "cryptoAlex",
            "currency_id" => $usdtId,
            "desc" => ""
        ]);

        CategorySavings::firstOrCreate([
            "title" => "BYBIT Plusha",
            "limit" => 0,
            "str_id" => "cryptoPlusha",
            "currency_id" => $usdtId,
            "desc" => ""
        ]);
    }
}