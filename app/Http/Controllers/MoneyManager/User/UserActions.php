<?php

namespace App\Http\Controllers\MoneyManager\User;
use App\Http\Controllers\Controller;
use App\Models\User as ModelUser;
use Illuminate\Http\Request;
use Carbon\Carbon;

class UserActions extends Controller
{
    public function getBasicUserInfo(){
        return ModelUser::select('id', 'name')->get();
    }
}