<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryExp extends Model
{
    use HasFactory;
    public $table = "category_exp";
    public $timestamps = false;
    protected $fillable = array('title', 'str_id', 'limit', 'isActive', 'currency_id', 'desc');
}
