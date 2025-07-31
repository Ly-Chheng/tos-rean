<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Role; 
use Illuminate\Http\Request;

class RoleController extends Controller
{
   
    public function index()
    {
        $roles = Role::all();
        return inertia('Cms/Roles/RolePage',[
            'roles' => $roles
        ]);
    }

    
    public function create()
    {
        
        $roles = Role::all();
        return inertia('Cms/Roles/CreateRole',[
            // 'roles' => $roles
        ]);
    }

    public function store(Request $request)
    {
       
    }

   
    public function show(string $id)
    {
        //
    }

    
    public function edit(string $id)
    {
        //
    }

    
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
