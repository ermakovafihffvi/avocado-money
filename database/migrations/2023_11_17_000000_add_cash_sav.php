<?php

use Illuminate\Database\Migrations\Migration;
use App\Models\CategorySavings;
use App\Models\Currency;
use App\Models\CategoryExp;

class AddCashSav extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
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