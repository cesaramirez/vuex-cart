<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    /**
     * Product relation.
     *
     * @return
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
