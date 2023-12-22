<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\CategorySavings;
use App\Models\Currency;

class AddCriptoSav extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('category_savings', function (Blueprint $table) {
            if (!Schema::hasColumn('category_savings', 'currency_id')) {
                $table->integer('currency_id')->nullable();
            }
            if (!Schema::hasColumn('category_savings', 'desc')) {
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