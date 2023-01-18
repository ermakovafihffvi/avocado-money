<?php

namespace App\Http\Controllers\MoneyManager\Savings;
use App\Http\Controllers\Controller;
use App\Models\Savings as ModelsSavings;
use App\Models\SavingSource as ModelsSavingSource;
use App\Models\CategorySavings as ModelsCategorySaving;
use Illuminate\Http\Request;
use Carbon\Carbon;

class SavingsActions extends Controller
{
    public function addSaving(Request $request){

        $requestData = $request->toArray();
        $cat = (new ModelsCategorySaving())->select('id')->where('str_id', $requestData["category"])->get();
        $source = (new ModelsSavingSource())->select('id')->where('str_id', "saved")->get();
        $saving = new ModelsSavings();
        $saving->created_at = Carbon::now();
        $saving->category_id = $cat[0]["id"];
        $saving->sum = $request["sum"];
        $saving->source_id = $source[0]["id"];
        $saving->save();

        return true;
    }

    /**
     * пока не изпользуется
     */
    public function updateSaving(Request $request){

        $requestData = $request->toArray();

        $saving = ModelsSavings::find($requestData["id"]);
        $saving->created_at = Carbon::now();
        $cat = (new ModelsCategorySaving())->select('id')->where('str_id', $requestData["category"])->get();
        $source = (new ModelsSavingSource())->select('id')->where('str_id', "saved")->get();
        $saving = new ModelsSavings();
        $saving->created_at = Carbon::now();
        $saving->category_id = $cat[0]["id"];
        $saving->source_id = $source[0]["id"];
        $saving->sum = $request["sum"];
    
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