<?php

namespace App\Http\Controllers\Pages;

use App\Models\User as ModelsUser;
use App\Models\Expenses as ModelsExpenses;
use App\Models\Savings as ModelsSavings;
use App\Models\CategorySavings as ModelsCategorySaving;
use App\Models\SavingSource as ModelsSourceSaving;
use App\Http\Controllers\MoneyManager\Periods;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

class Admin extends Controller
{
    /**
     * Возвращаем массив с последней записью добавленной в таблицу откладываемых
     */
    public function index()
    {
        $resArr = [];
 
        $savings = new ModelsSavings();
        
        $cat = (new ModelsCategorySaving())->select('id', 'str_id', "title")->get();
        $catArr = $cat->toArray();

        $source = (new ModelsSourceSaving())->select("id", "str_id")->get();
        $sourceArr = $source->toArray();
      
        foreach($sourceArr as $sourceItem){
            if($sourceItem["str_id"] == "saved"){
                $sourceId = $sourceItem["id"];
            }
        }

        $arr = [];
        //собираем из таблицы отложенных по одной последней записи каждой категории 
        foreach($catArr as $category){
            $res = $savings::select("id", "created_at", "category_id", "sum")
                ->where("source_id", $sourceId)
                ->where("category_id", $category["id"])
                ->orderBy("id", "DESC")
                ->limit(1)
                ->get();
            $resArr = $res->toArray(); 
            if(count($resArr) > 0){
                $resArr[0]["category_str"] = $category["str_id"];
                $resArr[0]["category_title"] = $category["title"];
                $arr = array_merge($arr, $resArr);   
            }    
        }
  
        return $arr;
    }
}