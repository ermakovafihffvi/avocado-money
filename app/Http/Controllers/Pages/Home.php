<?php

namespace App\Http\Controllers\Pages;

use App\Models\CategoryExp as ModelsCategoryExp;
use App\Models\CategorySavings as ModelsCategorySavings;
use App\Models\User as ModelsUser;
use App\Models\Expenses as ModelsExpenses;
use App\Http\Controllers\MoneyManager\Periods;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Home extends Controller
{
    public function index()
    {
        $resArr = [];

        $resArr["expenses"] = [];
        $resArr["expenses"]["total"] = 0;
        $resArr["incomes"] = [];
        $resArr["incomes"]["total"] = 0;

        $expenses = $this->getAllExpenses();
        //dump($expenses);
        $categories = $this->getCategoriesList();
        $users = $this->getAllUsers();

        $incomes = $this->getAllIncomes();

        foreach($users as $user){
            $resArr["expenses"]["users"][$user["id"]] = [
                "name" => $user["name"],
                "categories" => [],
                "total" => 0
            ];
            $resArr["incomes"]["users"][$user["id"]] = [
                "name" => $user["name"],
                "details" => [],
                "total" => 0
            ];
            foreach($categories as $category){
                $resArr["expenses"]["users"][$user["id"]]["categories"][$category["str_id"]]["title"] = $category["title"];
                if(!isset($resArr["expenses"]["common"][$category["str_id"]])) {
                    $resArr["expenses"]["common"][$category["str_id"]] = 0;
                }
                foreach($expenses as $expense){
                    if(($expense["category_id"] == $category["id"]) && ($user["id"] == $expense["user_id"])){
                        $resArr["expenses"]["users"][$user["id"]]["categories"][$category["str_id"]][] = $expense;
                        $resArr["expenses"]["users"][$user["id"]]["total"] += $expense["sum"];
                        $resArr["expenses"]["common"][$category["str_id"]] += $expense["sum"];
                        $resArr["expenses"]["total"] += $expense["sum"];
                    }
                }
            }
            foreach($incomes as $income){
                if($income->user_id == $user["id"]){
                    $resArr["incomes"]["users"][$user["id"]]["details"][] = $income; //объект
                    $resArr["incomes"]["users"][$user["id"]]["total"] += $income->sum;
                    $resArr["incomes"]["total"] += $income->sum;
                }
            }
        }

        $resArr["savings"] = [];
        $resArr["savings"]["categories"] = [];
        $resArr["savings"]["total"] = 0;

        $savingCategories = $this->getAllSavingsCategories();
        $savings = $this->getAllSavings();

        foreach($savingCategories as $category){
            $resArr["savings"]["categories"][$category["str_id"]]["title"] = $category["title"];
            $resArr["savings"]["categories"][$category["str_id"]]["limit"] = $category["limit"];
            foreach($savings as $saving){
                if($category["id"] == $saving->category_id)
                    $resArr["savings"]["categories"][$category["str_id"]][] = $saving; //объект
            }        
        }

        return $resArr;
    }

    public function getCategoriesList(){
        return ModelsCategoryExp::select('id', 'title', 'str_id')->get();
    }

    public function getAllUsers(){
        return ModelsUser::select('id', 'name')->get();
    }

    public function getAllSavingsCategories(){
        return ModelsCategorySavings::select('id', 'title', 'str_id', 'limit')->get();
    }

    public function getAllExpenses(){
        $period = (new Periods())->getPeriods()["month_22"];
        $startDate = $period["start_date"];
        $endDate = $period["end_date"];
        return ModelsExpenses::select('*')
            ->where('created_at', ">", $startDate)
            ->where('created_at', "<", $endDate)
            ->get(); //добавить условие на даты
    }

    public function getAllSavings(){
        return DB::table('savings')
            ->join('saving_source', 'savings.source_id', '=', 'saving_source.id')
            ->select('savings.*', 'saving_source.title', 'saving_source.str_id')
            ->get();
    }

    public function getAllIncomes(){
        $period = (new Periods())->getPeriods()["month_22"];
        $startDate = $period["start_date"];
        $endDate = $period["end_date"];
        return DB::table('income')
            ->join('user', 'income.user_id', '=', 'user.id')
            ->select('income.*', 'user.name')
            ->where('income.created_at', ">", $startDate)
            ->where('income.created_at', "<", $endDate)
            ->get();
    }
}