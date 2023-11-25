<?php

use Illuminate\Database\Migrations\Migration;
use App\Models\CategoryExp;
use App\Models\Currency;

class CreateHomeExpenses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $currencyId = Currency::where("str_id", "RUB")->first()->id;
        CategoryExp::firstOrCreate([
            "title" => "Жильё",
            "limit" => "150000",
            "isActive" => true,
            "str_id" => "house",
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
