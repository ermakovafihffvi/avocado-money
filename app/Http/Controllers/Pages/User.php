<?php

namespace App\Http\Controllers\Pages;

use App\Models\CategoryExp as ModelsCategoryExp;
use App\Models\Expenses as ModelsExpenses;
use App\Models\Income as ModelsIncome;
use App\Models\User as ModelsUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Controllers\MoneyManager\Periods;

class User extends Controller
{
    public function index($userId)
    {
        $resArr = [];
        $user = $this->getUser($userId);
        $expenses = $this->getUserExpenses($userId);
        $expensesCategories = $this->getAllExpCategories();
        $income = $this->getUserIncome($userId);
        
        $resArr["user"] = $user;
        $resArr["expenses"] = [];
        foreach($expensesCategories as $category){
            //dump($category["str_id"]);
            foreach($expenses as $exp){
                if($exp->str_id == $category["str_id"]){
                    $resArr["expenses"][$exp->str_id]["details"][] = $exp;
                    if(!isset($resArr["expenses"][$exp->str_id]["total"])){
                        $resArr["expenses"][$exp->str_id]["total"] = 0;    
                    }
                    $resArr["expenses"][$exp->str_id]["total"] += $exp->sum;
                }
            }
            $resArr["catList"][] = $category;
        }

        $resArr["income"]["details"] = $income;
        $resArr["income"]["total"] = 0;
        foreach($income as $item){
            if($item instanceof \stdClass){
                $resArr["income"]["total"] += $item->sum;
            }
        }

        return $resArr;
     
    }

    public function getUser($userId){
        return ModelsUser::select('*')->where('id', '=', $userId)->get();
    }

    public function getUserExpenses($userId){
        $period = (new Periods())->getPeriods()["month_22"];
        $startDate = $period["start_date"];
        $endDate = $period["end_date"];
        return DB::table('expenses')
        ->join('user', 'expenses.user_id', '=', 'user.id')
        ->join('category_exp', 'expenses.category_id', '=', 'category_exp.id')
        ->select('expenses.*', 'category_exp.str_id', 'category_exp.title')
        ->where('user.id', '=', $userId)
        ->where('expenses.created_at', ">", $startDate)
        ->where('expenses.created_at', "<", $endDate)
        ->get();
    }

    public function getUserIncome($userId){
        $period = (new Periods())->getPeriods()["month_22"];
        $startDate = $period["start_date"];
        $endDate = $period["end_date"];
        return DB::table('income')
        ->join('user', 'income.user_id', '=', 'user.id')
        ->select('income.*', 'user.name')
        ->where('user.id', '=', $userId)
        ->where('income.created_at', ">", $startDate)
        ->where('income.created_at', "<", $endDate)
        ->get();
    }

    public function getAllExpCategories(){
        return ModelsCategoryExp::select('id', 'title', 'str_id')->get();
    }
}