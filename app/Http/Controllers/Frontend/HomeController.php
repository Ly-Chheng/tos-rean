<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(Request $request)
    {        
        return inertia('Frontend/Homes/index');
    }

    public function video()
    {        
        return inertia('Frontend/Homes/video');
    }
}
