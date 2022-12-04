<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Income extends Model
{
    use HasFactory;
    public $table = "income";
    public $timestamps = false;
    protected $fillable = array('user_id', 'desc', 'sum', 'created_at');
}
