<?php

namespace App\Http\Controllers\MoneyManager\Expenses;
use App\Http\Controllers\Controller;
use App\Models\Expenses as ModelsExpenses;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ExpensesActions extends Controller
{
    public function addExpense(Request $request){
        //file_put_contents(__DIR__."/log1.txt", print_r($request->toArray(), true)); //массив 
        //file_put_contents(__DIR__."/log.txt", print_r(get_class_methods($request), true));
        $requestData = $request->toArray();
        $expense = new ModelsExpenses();
        $expense->created_at = Carbon::now();
        $expense->category_id = $requestData["category_id"];
        $expense->desc = $requestData["desc"];
        $expense->user_id = $requestData["user_id"];
        $expense->sum = $requestData["sum"];

        $expense->save();

        return true;
    }

    public function updateExpense(Request $request){

        $requestData = $request->toArray();

        $expense = ModelsExpenses::find($requestData["id"]);
        $expense->created_at = Carbon::now();
        $expense->category_id = $requestData["category_id"];
        $expense->desc = $requestData["desc"];
        $expense->user_id = $requestData["user_id"];
        $expense->sum = $requestData["sum"];

        $expense->save();

        return true;
    }

    public function deleteExpense(Request $request){
        $requestData = $request->toArray();
        $expense = ModelsExpenses::find($requestData["id"]);
        $expense->delete();

        return true;
    }
}