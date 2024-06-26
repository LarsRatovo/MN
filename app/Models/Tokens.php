<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tokens extends Model
{
    use HasFactory;
    protected $table="tokens";
    public $timestamps=false;
    public $incrementing=false;
    protected $fillable=[
        "token",
        "begin_validation",
        "end_validation",
        "valid"
    ];
}
