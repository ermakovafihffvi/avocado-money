<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;
use App\Models\User as ModelsUser;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class AuthController extends Controller
{
    public function checkIfAuth(Request $request){
        //return Auth::viaRemember() ? true : false;
        return Auth::check() ? true : false;
    }
}