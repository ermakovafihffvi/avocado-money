<?php

namespace App\Http\Controllers;

use App\Models\CategoryExp as ModelsCategoryExp;
use Illuminate\Http\Request;

class CategoryExp extends Controller
{
    public function index()
    {
        return ModelsCategoryExp::select('*')->get();
    }
}
 