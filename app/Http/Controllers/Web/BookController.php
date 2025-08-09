<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\StemBook;
use App\Models\BookCategory;

class BookController extends Controller
{
    public function index()
    {
        return inertia('WebPages/Books', [
            "categories"=> Category::all(),
            "stembooks"=>StemBook::all(),
            "bookCategories"=>BookCategory::all(),
        ]);
    }
}
