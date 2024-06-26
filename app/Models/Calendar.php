<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calendar extends Model
{
    use HasFactory;
    protected $table="calendar";
    public $timestamps=false;
    public $incrementing=false;
    protected $fillable=[
      "date_work",
      "deliver"
    ];
}
