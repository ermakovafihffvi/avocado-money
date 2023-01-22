<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\CategoryExp;
use Carbon\Carbon;

class SavingsExp extends Seeder
{
    protected $catMoving;
    protected $catUnexpected;
    protected $catBigExp;
    protected $table;

    /**
     * Prepare data
     */
    public function prepareData(){
        $catExp = new CategoryExp();

        $this->catMoving = $catExp::select("id")->where("str_id", "moving")->get()[0]["id"];
        $this->catUnexpected = $catExp::select("id")->where("str_id", "unexpected")->get()[0]["id"];
        $this->catBigExp = $catExp::select("id")->where("str_id", "bigexpenses")->get()[0]["id"];
        
        $this->table = DB::table("expenses");
    }
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->prepareData();
        $this->table->insert([
            [
                'user_id' => 1, 
                'sum' => 15539, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "06", "30"),
                'desc' => 'Ящички, перфоратор, и прочее'
            ],
            [
                'user_id' => 1, 
                'sum' => 5655, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "06", "30"),
                'desc' => 'Стул'
            ],
            [
                'user_id' => 1, 
                'sum' => 19320, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "06", "30"),
                'desc' => 'Ушко'
            ],
            [
                'user_id' => 1, 
                'sum' => 11000, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "08", "11"),
                'desc' => 'монитор'
            ],
            [
                'user_id' => 1, 
                'sum' => 10000, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "09", "02"),
                'desc' => 'монитор'
            ],
            [
                'user_id' => 1, 
                'sum' => 25280, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "11", "14"),
                'desc' => 'Диван1'
            ],
            [
                'user_id' => 1, 
                'sum' => 25000, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "11", "26"),
                'desc' => 'Диван2'
            ],
            [
                'user_id' => 1, 
                'sum' => 8221, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "11", "19"),
                'desc' => 'Комод'
            ],
            [
                'user_id' => 1, 
                'sum' => 3277, 
                'category_id' => $this->catBigExp, 
                'created_at' => Carbon::createFromDate("2022", "11", "22"),
                'desc' => 'таблетки'
            ],
        ]);
    }
}