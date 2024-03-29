<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CategoryExp extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_exp', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('limit');
            $table->boolean('isActive');
            $table->string('str_id');
            $table->unique('str_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('category_exp');
    }
}
