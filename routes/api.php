<?php

use App\{Cart, Product};
use Illuminate\Http\Request;

$router->delete('/cart', function () {
    Cart::truncate();
});

$router->delete('/cart/{productId}', function ($productId, Request $request) {
    $item = Cart::where('product_id', $productId)->first();
    $item->decrement('quantity');

    if ($item->quantity === 0) {
        $item->delete();
    }

    return response(null, 200);
});

$router->post('/cart', function (Request $request) {
    $item = Cart::where('product_id', $request->product_id);

    if ($item->count()) {
        $item->increment('quantity');
        $item = $item->first();
    } else {
        $item = Cart::forceCreate([
            'product_id' => $request->product_id,
            'quantity' => 1,
        ]);
    }

    return response()->json([
        'quantity' => $item->quantity,
        'product' => $item->product
    ]);
});

$router->get('/cart', function () {
    return Cart::with('product')->orderBy('created_at', 'desc')->get();
});

$router->get('/products', function () {
    return Product::get();
});
