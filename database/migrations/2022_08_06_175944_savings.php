<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Savings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('savings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamp('created_at');
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('source_id');
            $table->unsignedBigInteger('sum');

            $table->foreign('category_id')->references('id')->on('category_savings');
            $table->foreign('source_id')->references('id')->on('saving_source');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('savings');
    }
}
