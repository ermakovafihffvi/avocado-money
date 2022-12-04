<?php

namespace App\Http\Controllers\MoneyManager\Incomes;
use App\Http\Controllers\Controller;
use App\Models\Income as ModelsIncome;
use Illuminate\Http\Request;
use Carbon\Carbon;

class IncomeRequests extends Controller
{
    public function addIncome(Request $request){
        //file_put_contents(__DIR__."/log1.txt", print_r($request->toArray(), true)); //массив 
        //file_put_contents(__DIR__."/log.txt", print_r(get_class_methods($request), true));
        $requestData = $request->toArray();
        $income = new ModelsIncome();
        $income->created_at = Carbon::now();
        $income->desc = $requestData["desc"];
        $income->user_id = $requestData["user_id"];
        $income->sum= $requestData["sum"];

        $income->save();

        return true;
    }

    public function updateIncome(Request $request){

        $requestData = $request->toArray();

        $income = ModelsIncome::find($requestData["id"]);
        $income->created_at = Carbon::now();
        $income->desc = $requestData["desc"];
        $income->user_id = $requestData["user_id"];
        $income->sum= $requestData["sum"];

        $income->save();

        return true;
    }

    public function deleteIncome(Request $request){
        $requestData = $request->toArray();
        $income = ModelsIncome::find($requestData["id"]);
        $income->delete();

        return true;
    }
}