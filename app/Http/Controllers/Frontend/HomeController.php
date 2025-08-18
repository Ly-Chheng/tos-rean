<?php
namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Support;
use App\Models\Student;
use App\Models\Strategy;
use App\Models\Video;
use App\Models\Banner;
use App\Models\Book;
use App\Models\StrategyDetail;
use App\Models\Podcast;

class HomeController extends Controller
{
    public function index(Request $request)
    {        
        return inertia('Frontend/Homes/index', [
            'supports' => Support::all(),
            'students' => Student::all(),
            'strategies' => Strategy::all(),
            'videos' => Video::all(),
            'banners' => Banner::all(),
            'books' => Book::all(),
            'podcast' => Podcast::latest(),
        ]);
    }

    public function video()
    {        
        return inertia('Frontend/Homes/video', [
            'podcast' => Podcast::all(),
        ]);
    }

    public function read()
    {        
        return inertia('Frontend/Homes/video', [
            'podcast' => Podcast::all(),
        ]);
    }

    public function strategyDetail()
    {
        return inertia('Frontend/Homes/strategydetail', [
            'strategyDetail' => StrategyDetail::all(),
            'strategies' => Strategy::all(),
        ]);
    }
}
