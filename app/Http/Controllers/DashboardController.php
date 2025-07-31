<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\Frontend\SpecialOfferResource;
use App\Http\Resources\Frontend\CourseVideoResource;
use App\Http\Resources\Frontend\CourseDocumentResource;
use App\Http\Resources\Frontend\StudentResource;
use App\Http\Resources\UserCrudResource;
use App\Models\SpecialOffer;
use App\Models\CourseVideo;
use App\Models\CourseDocument;
use App\Models\User;
use App\Models\Student;
use App\Models\PaymentItem;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index(Request $request)
    {        

      return inertia('Dashboard', [
          
      ]);
    }
}