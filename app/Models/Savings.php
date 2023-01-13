<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Savings extends Model
{
    use HasFactory;
    public $table = "savings";
    public $timestamps = false;
    protected $fillable = array('source_id', 'category_id', 'sum', 'created_at');
}
