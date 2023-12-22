<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

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

        Schema::table('category_exp', function (Blueprint $table) {
            if (!Schema::hasColumn('category_exp', 'currency_id')) {
                $table->integer('currency_id')->nullable();
            }
            if (!Schema::hasColumn('category_exp', 'desc')) {
            $table->string('desc')->nullable();
            }
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