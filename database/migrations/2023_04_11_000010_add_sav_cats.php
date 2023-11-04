<?php

use Illuminate\Database\Migrations\Migration;
use App\Models\CategoryExp;
use App\Models\Currency;

class AddSavCats extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $currencyId = Currency::where("str_id", "USDT")->first()->id;
        CategoryExp::firstOrCreate([
            "title" => "BYBIT Alex",
            "limit" => "infty",
            "isActive" => true,
            "str_id" => "cryptoAlex",
            "currency_id" => $currencyId,
            "desc" => ""
        ]);

        CategoryExp::firstOrCreate([
            "title" => "BYBIT Plusha",
            "limit" => "infty",
            "isActive" => true,
            "str_id" => "cryptoPlusha",
            "currency_id" => $currencyId,
            "desc" => ""
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}