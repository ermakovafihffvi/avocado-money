<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\CategorySavings;
use App\Models\SavingSource;

use Carbon\Carbon;

class Savings extends Seeder
{
    protected $sourcePresent;
    protected $sourceSaved;
    protected $sourceProcent;
    protected $catMoving;
    protected $catUnexpected;
    protected $catBigExp;
    protected $table;

    /**
     * Prepare data
     */
    public function prepareData(){
        $catSavings = new CategorySavings();
        $sourceSavings = new SavingSource();

        $this->sourcePresent = $sourceSavings::select("id")->where("str_id", "present")->get()[0]["id"];
        $this->sourceSaved = $sourceSavings::select("id")->where("str_id", "saved")->get()[0]["id"];
        $this->sourceProcent = $sourceSavings::select("id")->where("str_id", "procent")->get()[0]["id"];

        $this->catMoving = $catSavings::select("id")->where("str_id", "moving")->get()[0]["id"];
        $this->catUnexpected = $catSavings::select("id")->where("str_id", "unexpected")->get()[0]["id"];
        $this->catBigExp = $catSavings::select("id")->where("str_id", "bigexpenses")->get()[0]["id"];
        
        $this->table = DB::table("savings");
    }

    public function addMoving(){
        $this->table->insert([
            [
                'source_id' => $this->sourcePresent, 
                'sum' => 150000, 
                'category_id' => $this->catMoving, 
                'created_at' => Carbon::createFromDate("2022", "06", "28")
            ],
            [
                'source_id' => $this->sourceSaved, 
                'sum' => 13326, 
                'category_id' => $this->catMoving, 
                'created_at' => Carbon::createFromDate("2022", "07", "23")
            ],
            [
                'source_id' => $this->sourceSaved, 
                'sum' => 8222, 
                'category_id' => $this->catMoving, 
                'created_at' => Carbon::createFromDate("2022", "07", "23")
            ],
            [
                'source_id' => $this->sourceProcent, 
                'sum' => 61.64, 
                'category_id' => $this->catMoving, 
                'created_at' => Carbon::createFromDate("2022", "07", "27")
            ],
            [
                'source_id' => $this->sourceSaved, 
                'sum' => 13013, 
                'category_id' => $this->catMoving, 
                'created_at' => Carbon::createFromDate("2022", "08", "21")
            ],
            [
                'source_id' => $this->sourceProcent, 
                'sum' => 931.20, 
                'category_id' => $this->catMoving, 
                'created_at' => Carbon::createFromDate("2022", "07", "31")
            ],
            [
                'source_id' => $this->sourceSaved, 
                'sum' => 25500, 
                'category_id' => $this->catMoving, 
                'created_at' => Carbon::createFromDate("2022", "09", "21")
            ],
            [
                'source_id' => $this->sourceSaved, 
                'sum' => 20183, 
                'category_id' => $this->catMoving, 
                'created_at' => Carbon::createFromDate("2022", "10", "22")
            ],
            [
                'source_id' => $this->sourceProcent, 
                'sum' => 896.41, 
                'category_id' => $this->catMoving, 
                'created_at' => Carbon::createFromDate("2022", "09", "30")
            ],
            [
                'source_id' => $this->sourceProcent, 
                'sum' => 879.25, 
                'category_id' => $this->catMoving, 
                'created_at' => Carbon::createFromDate("2022", "08", "31")
            ],
            [
                'source_id' => $this->sourceProcent, 
                'sum' => 994.18, 
                'category_id' => $this->catMoving, 
                'created_at' => Carbon::createFromDate("2022", "10", "31")
            ],
            [
                'source_id' => $this->sourceSaved, 
                'sum' => 30000, 
                'category_id' => $this->catMoving, 
                'created_at' => Carbon::createFromDate("2022", "11", "22")
            ],
            [
                'source_id' => $this->sourceSaved, 
                'sum' => 30000, 
                'category_id' => $this->catMoving, 
                'created_at' => Carbon::createFromDate("2022", "12", "21")
            ],
            [
                'source_id' => $this->sourceProcent, 
                'sum' => 1057.84               , 
                'category_id' => $this->catMoving, 
                'created_at' => Carbon::createFromDate("2022", "12", "21")
            ]
        ]);
    }

    public function addUnexpected(){
        $this->table->insert([
            [
                'source_id' => $this->sourcePresent, 
                'sum' => 4476, 
                'category_id' => $this->catUnexpected, 
                'created_at' => Carbon::createFromDate("2022", "06", "28")
            ],
            [
                'source_id' => $this->sourceProcent, 
                'sum' => 51.58, 
                'category_id' => $this->catUnexpected, 
                'created_at' => Carbon::createFromDate("2022", "07", "27")
            ],
            [
                'source_id' => $this->sourceSaved, 
                'sum' => 4100, 
                'category_id' => $this->catUnexpected, 
                'created_at' => Carbon::createFromDate("2022", "07", "23")
            ],
            [
                'source_id' => $this->sourceProcent, 
                'sum' => 30.49, 
                'category_id' => $this->catUnexpected, 
                'created_at' => Carbon::createFromDate("2022", "08", "21")
            ],
            [
                'source_id' => $this->sourceSaved, 
                'sum' => 4100, 
                'category_id' => $this->catUnexpected, 
                'created_at' => Carbon::createFromDate("2022", "08", "21")
            ],
            [
                'source_id' => $this->sourceSaved, 
                'sum' => 4100, 
                'category_id' => $this->catUnexpected, 
                'created_at' => Carbon::createFromDate("2022", "09", "21")
            ],
            [
                'source_id' => $this->sourceProcent, 
                'sum' => 52.88, 
                'category_id' => $this->catUnexpected, 
                'created_at' => Carbon::createFromDate("2022", "09", "03")
            ],
            [
                'source_id' => $this->sourceSaved, 
                'sum' => 4100, 
                'category_id' => $this->catUnexpected, 
                'created_at' => Carbon::createFromDate("2022", "10", "22")
            ],
            [
                'source_id' => $this->sourceSaved, 
                'sum' => 4100, 
                'category_id' => $this->catUnexpected, 
                'created_at' => Carbon::createFromDate("2022", "11", "22")
            ],
            [
                'source_id' => $this->sourceProcent, 
                'sum' => 70.59, 
                'category_id' => $this->catUnexpected, 
                'created_at' => Carbon::createFromDate("2022", "10", "03")
            ],
            [
                'source_id' => $this->sourceProcent, 
                'sum' => 94.62, 
                'category_id' => $this->catUnexpected, 
                'created_at' => Carbon::createFromDate("2022", "11", "02")
            ],
            [
                'source_id' => $this->sourceProcent, 
                'sum' => 111.84, 
                'category_id' => $this->catUnexpected, 
                'created_at' => Carbon::createFromDate("2022", "12", "03")
            ],
            [
                'source_id' => $this->sourceSaved, 
                'sum' => 4100, 
                'category_id' => $this->catUnexpected, 
                'created_at' => Carbon::createFromDate("2022", "12", "21")
            ]
        ]);
    }

    public function addBigExp(){
        $this->table->insert([
            [
                'source_id' => $this->sourcePresent, 
                'sum' => 175000, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "06", "28")
            ],
            [
                'source_id' => $this->sourceProcent, 
                'sum' => 672.65, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "07", "27")
            ],
            [
                'source_id' => $this->sourceProcent, 
                'sum' => 647.16, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "08", "27")
            ],
            [
                'source_id' => $this->sourceProcent, 
                'sum' => 594.9, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "09", "27")
            ],
            [
                'source_id' => $this->sourceProcent, 
                'sum' => 569.1, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "10", "27")
            ],
            [
                'source_id' => $this->sourceSaved, 
                'sum' => 1097, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "11", "22")
            ],
            [
                'source_id' => $this->sourceSaved, 
                'sum' => 3277, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "11", "25")
            ],
            [
                'source_id' => $this->sourceSaved, 
                'sum' => 16983, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "11", "22")
            ],
            [
                'source_id' => $this->sourceSaved, 
                'sum' => 8180, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "12", "21")
            ],
            [
                'source_id' => $this->sourceProcent, 
                'sum' => 535.27, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "11", "27")
            ],
        ]);
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->prepareData();
        $this->addMoving();
        $this->addUnexpected();
        $this->addBigExp();
    }
}