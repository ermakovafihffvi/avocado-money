<?php

namespace App\Http\Controllers\Pages;

use App\Models\CategorySavings as ModelsCategorySavings;
use App\Models\Savings as ModelsSavings;
use App\Models\Expenses as ModelsExpenses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class Saving extends Controller
{
    public function index()
    {
        $resArr = [];
        $savingsCategoriesArr = $this->getAllSavingsCategories();
        $savingsArr = $this->getAllSavings(); 
        //dump($savingsArr);
        foreach($savingsCategoriesArr as $category){
            $resArr["categories"][$category["id"]] = [
                "id" => $category["id"],
                "name" => $category["title"],
                "str_id" => $category["str_id"],
                "sum" => 0,
                "details_arr" => []
            ];
            $resArr["total"][$category["str_id"]] = [
                "title" => $category["title"],
                "sum" => 0
            ];
            foreach($savingsArr as $saving){
                if($saving->category_id == $category["id"]){
                    $resArr["categories"][$category["id"]]["sum"] += $saving->sum;
                    $resArr["categories"][$category["id"]]["details_arr"][] = [
                        "id" => $saving->id,
                        "date" => $saving->created_at,
                        "sum" => $saving->sum,
                        "source" => $saving->title
                    ];
                    $resArr["total"][$category["str_id"]]["sum"] += $saving->sum;
                    $resArr["total"][$category["str_id"]]["sum"] = round($resArr["total"][$category["str_id"]]["sum"], 2);
                }
            }
        }

        $expenses = $this->getSpecialExpences();
        //dump($expenses);
        $resArr["expenses"] = [];
        foreach($expenses as $exp){
            $resArr["expenses"][] = $exp; //$exp - Объект
            
            $resArr["total"][$exp->str_id]["sum"] -= $exp->sum;
            $resArr["total"][$exp->str_id]["sum"] = round($resArr["total"][$exp->str_id]["sum"], 2);
        }


        return $resArr;
    }

    public function getAllSavingsCategories(){
        return ModelsCategorySavings::select('id', 'title', 'str_id')->get();
    }

    public function getAllSavings(){
        return DB::table('savings')
            ->join('saving_source', 'savings.source_id', '=', 'saving_source.id')
            ->select('savings.*', 'saving_source.title', 'saving_source.str_id')
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function getSpecialExpences(){
        return DB::table('expenses')
            ->join('user', 'expenses.user_id', '=', 'user.id')
            ->join('category_exp', 'expenses.category_id', '=', 'category_exp.id')
            ->select('expenses.*', 'user.name', 'category_exp.str_id', 'category_exp.title')
            ->where('category_exp.special', '=', true)
	    ->orderBy('created_at', 'desc')
            ->get();
    }
}
