<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Delivery extends Model
{
    use HasFactory;
    protected $table="delivery";
    public $timestamps=false;
    protected $fillable=[
        "provider",
        "date_delivery",
        "place",
        "contact",
        "price",
        "fee",
        "type",
        "stat",
        "observation"
    ];
    public function owner():BelongsTo{
        return $this->belongsTo(Provider::class,"provider");
    }
}
