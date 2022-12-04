<?php

namespace App\Http\Controllers\Pages;

use App\Models\CategoryExp as ModelsCategoryExp;
use App\Models\User as ModelsUser;
use App\Models\Expenses as ModelsExpenses;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\MoneyManager\Periods;

class Category extends Controller
{
    public function index($categoryStr)
    {
        $resArr = [];

        $category = $this->getCategory($categoryStr);
        $category = $category[0];
        
        $resArr["category_name"] = $category["title"];
        $resArr["category_id"] = $category["id"];
        $categoryId = $category["id"];
        $resArr["str_id"] = $category["str_id"];

        $users = $this->getAllUsers();
        $expenses = $this->getExpensesByCategory($categoryId);
        foreach($users as $userObj){
            $user["sum"] = 0;
            $resArr["total"] = 0;
            $user["detail"] = [];
            $user["name"] = $userObj["name"];
            $user["email"] = $userObj["email"];
            $user["id"] = $userObj["id"];
            foreach($expenses as $exp){
                if($exp["user_id"] == $userObj["id"]){
                    $user["sum"] += $exp["sum"];
                    $user["detail"][] = $exp;
                }
                $resArr["total"] += $exp["sum"];
            }
            $resArr["users"][$user["id"]] = $user;
        }

        return $resArr;
    }

    public function getAllUsers(){
        return ModelsUser::select('id', 'name')->get();
    }

    public function getExpensesByCategory($id){
        $period = (new Periods())->getPeriods()["month_22"];
        $startDate = $period["start_date"];
        $endDate = $period["end_date"];
        return ModelsExpenses::select('*')
            ->where('category_id', $id)
            //->where('created_at', ">", $startDate)
            ->get(); //добавить условие на даты
    }

    public function getCategory($str_id){
        return ModelsCategoryExp::select('*')->where('str_id', $str_id)->get();
    }
}
 