<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expenses extends Model
{
    use HasFactory;
    public $table = "expenses";
    public $timestamps = false;
    protected $fillable = array('category_id', 'user_id', 'desc', 'sum', 'created_at');
}
