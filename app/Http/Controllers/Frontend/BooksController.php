<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BooksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = [
            [
                'id' => 1,
                'title' => 'Romantic Novels',
                'image' => 'https://pixy.org/download/588319/',
            ],
            [
                'id' => 2,
                'title' => 'Children\'s Books',
                'image' => 'https://clipart-library.com/img/675422.png',
            ],
            [
                'id' => 3,
                'title' => 'Animal Adventures',
                'image' => 'https://www.pngkey.com/png/full/51-510953_tortoise-sea-turtle-reading-a-book.png',
            ],
            [
                'id' => 4,
                'title' => 'Wildlife Stories',
                'image' => 'https://static.vecteezy.com/system/resources/thumbnails/020/647/524/small_2x/lion-face-icon-cute-animal-icon-in-circle-png.png',
            ],
            [
                'id' => 5,
                'title' => 'Fantasy Fiction',
                'image' => 'https://cdn-icons-png.freepik.com/256/1841/1841047.png?semt=ais_white_label',
            ],
            [
                'id' => 6,
                'title' => 'Love Story Classics',
                'image' => 'https://cdn-icons-png.freepik.com/256/2759/2759168.png?semt=ais_white_label',
            ],
        ];
        $stembooks = [
            [
                'id' => 1,
                'title' => 'The Hunger Games',
                'genre' => 'Dystopian Fiction',
                'image' => 'https://m.media-amazon.com/images/I/817BQY9AkfL._SY522_.jpg',
            ],
            [
                'id' => 2,
                'title' => 'Catching Fire',
                'genre' => 'ប្រាជ្ញាជីវិត',
                'image' => 'https://mindbooks.com.kh/storage/nbQvZrNki9gL2pNR5rX1OBmmbRS5FEtbH65Q9ttf.jpeg',
            ],
            [
                'id' => 3,
                'title' => 'Mockingjay',
                'genre' => 'Kid Story Zone',
                'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALD-u3CtIHfRsZ0tIhbHVgWAPLcdt3cRitw&s',
            ],
            [
                'id' => 4,
                'title' => 'The Maze Runner',
                'genre' => 'Dystopian Fiction',
                'image' => 'https://m.media-amazon.com/images/I/817BQY9AkfL._SY522_.jpg',
            ],
            [
                'id' => 5,
                'title' => 'The Maze Runner',
                'genre' => 'Dystopian Fiction',
                'image' => 'https://m.media-amazon.com/images/I/817BQY9AkfL._SY522_.jpg',
            ],
        ];
        return inertia('Frontend/Books/index', [
            "categories" => $categories,
            "stemBooks" => $stembooks,
            // "bookCategories" => BookCategory::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
