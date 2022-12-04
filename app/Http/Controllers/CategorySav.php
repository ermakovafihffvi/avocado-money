<?php

namespace App\Http\Controllers;

use App\Models\CategorySavings as ModelsCategorySav;
use Illuminate\Http\Request;

class CategorySav extends Controller
{
    public function index()
    {
        return ModelsCategorySav::select('*')->get();
    }
}