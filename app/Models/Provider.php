<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provider extends Model
{
    use HasFactory;
    protected $table="provider";
    public $timestamps=false;
    protected $primaryKey="id";
    protected $fillable=[
        "name",
        "surname",
        "recovery",
        "contact"
    ];
}
