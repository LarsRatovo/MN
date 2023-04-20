<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Spent extends Model
{
    use HasFactory;
    protected $table="spent";
    public $timestamps=false;
    public $incrementing=false;
    protected $fillable=
        [
            "deliver",
            "date_spent",
            "reason",
            "amount"
        ];
    public function owner():BelongsTo{
        return $this->belongsTo(Deliver::class,"deliver");
    }
}
