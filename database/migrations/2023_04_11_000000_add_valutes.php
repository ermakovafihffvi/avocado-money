<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\CategoryExp;
use App\Models\Currency;

class AddValutes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('currency')){
            Schema::create('currency', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('title');
                $table->string('str_id');
                $table->unique('str_id');
            });
        }

        Currency::firstOrCreate(["title" => "ruble", "str_id" => "RUB"]);
        Currency::firstOrCreate(["title" => "dollar", "str_id" => "USD"]);
        Currency::firstOrCreate(["title" => "euro", "str_id" => "EUR"]);
        Currency::firstOrCreate(["title" => "crypto dollar", "str_id" => "USDT"]);
        
        Schema::table('category_exp', function (Blueprint $table) {
            if (!Schema::hasColumn('category_exp', 'currency_id')) {
                $table->integer('currency_id')->nullable();
            }
            if (!Schema::hasColumn('category_exp', 'desc')) {
            $table->string('desc')->nullable();
            }
        });

        $rubleId = Currency::where("str_id", "RUB")->first()->id;
        CategoryExp::get()->each(function ($category, int $key) use ($rubleId) {
            $category->currency_id = $rubleId;
            $category->save();
        });
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