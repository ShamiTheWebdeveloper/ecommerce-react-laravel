<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create(
            [
            'name'=>'Mobile',
            'description'=>'This is mobile category'
            ],
            [
                'name'=>'Desktop',
                'description'=>'This is desktop category'
            ],
        );
    }
}
