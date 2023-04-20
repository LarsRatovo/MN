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
        "id",
        "ref",
        "name",
        "surname",
        "recovery",
        "contact",
        "deliveries"
    ];
    public function deliveries(){
        return $this->hasMany(Delivery::class,"provider");
    }
}
