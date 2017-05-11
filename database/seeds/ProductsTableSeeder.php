<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $products = [
            [
              "title"=> "Coffee",
              "description"=> "Beautiful coffee",
              "image"=> "https://placeholdit.imgix.net/~text?txtsize=33&txt=242%C3%97200&w=242&h=200",
              "price"=> 5.99
            ],
            [
              "title"=> "Tea",
              "description"=> "Lovely tea",
              "image"=> "https://placeholdit.imgix.net/~text?txtsize=33&txt=242%C3%97200&w=242&h=200",
              "price"=> 10.99
            ],
            [
              "title"=> "Aubergine",
              "description"=> "A single aubergine",
              "image"=> "https://placeholdit.imgix.net/~text?txtsize=33&txt=242%C3%97200&w=242&h=200",
              "price"=> 0.5
            ],
            [
              "title"=> "Banana",
              "description"=> "A lovely yellow banana",
              "image"=> "https://placeholdit.imgix.net/~text?txtsize=33&txt=242%C3%97200&w=242&h=200",
              "price"=> 0.9
            ],
            [
              "title"=> "Toothpaste",
              "description"=> "To brush your teeth",
              "image"=> "https://placeholdit.imgix.net/~text?txtsize=33&txt=242%C3%97200&w=242&h=200",
              "price"=> 2.5
            ]
        ];

        foreach ($products as $product) {
            Product::forceCreate($product);
        }
    }
}
