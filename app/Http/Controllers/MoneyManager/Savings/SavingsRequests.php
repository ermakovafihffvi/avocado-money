<?php

namespace App\Http\Controllers\MoneyManager\Savings;
use App\Http\Controllers\Controller;
use App\Models\Savings as ModelsSavings;
use Illuminate\Http\Request;
use Carbon\Carbon;

class SavingsRequests extends Controller
{
    public function addSaving(Request $request){
        file_put_contents(__DIR__."/log1.txt", print_r($request->toArray(), true)); //массив 
        file_put_contents(__DIR__."/log.txt", print_r(get_class_methods($request), true));
        $requestData = $request->toArray();
        $saving = new ModelsSavings();
        $saving->created_at = Carbon::now();
        $saving->desc = $requestData["desc"];
        $saving->user_id = $requestData["user_id"];
        $saving->sum= $requestData["sum"];

        $saving->save();

        return true;
    }

    public function updateSaving(Request $request){

        $requestData = $request->toArray();

        $saving = ModelsSavings::find($requestData["id"]);
        $saving->created_at = Carbon::now();
        $saving->desc = $requestData["desc"];
        $saving->user_id = $requestData["user_id"];
        $saving->sum= $requestData["sum"];

        $saving->save();

        return true;
    }

    public function deleteSaving(Request $request){
        $requestData = $request->toArray();
        $saving = ModelsSavings::find($requestData["id"]);
        $saving->delete();

        return true;
    }
}