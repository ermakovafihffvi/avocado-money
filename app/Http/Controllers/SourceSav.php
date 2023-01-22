<?php

namespace App\Http\Controllers;

use App\Models\SavingSource as ModelsSourceSav;
use Illuminate\Http\Request;

class SourceSav extends Controller
{
    public function index()
    {
        return ModelsSourceSav::select('*')->get();
    }
}