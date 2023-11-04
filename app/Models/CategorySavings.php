<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategorySavings extends Model
{
    use HasFactory;
    public $table = "category_savings";
    public $timestamps = false;
    protected $fillable = array('title', 'str_id', 'limit', 'currency_id', 'desc');
}
