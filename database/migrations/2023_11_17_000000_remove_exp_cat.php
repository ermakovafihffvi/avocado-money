<?php

use Illuminate\Database\Migrations\Migration;
use App\Models\CategoryExp;

class RemoveExpCat extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        CategoryExp::where("str_id", "cryptoPlusha")->delete();
        $crypto = CategoryExp::where("str_id", "cryptoAlex")->first();
        $crypto->str_id = "cryptoBybit";
        $crypto->title = "BYBIT";
        $crypto->save();
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