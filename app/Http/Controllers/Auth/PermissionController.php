<?php

namespace App\Http\Controllers\Auth;
use Spatie\Permission\Models\Permission;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class PermissionController extends Controller
{
    public function index()
    {
        $permissions = Permission::orderBy('id', 'desc')->get();
        // dd($permission->pluck('name'));
        return inertia('Cms/Permission/PermissionPage',[
            "permissions" => $permissions,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:permissions,name',
            'guard_name' => 'required|string',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        Permission::create([
            'name' => $request->name,
            'guard_name' => $request->guard_name,
        ]);

        return to_route('permission.index')->with('success','Permission created successfully');
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
        $permission = Permission::findOrFail($id);
        $permission->update([
            'name' => $request->name,
            'guard_name' => $request->guard_name,
        ]);
        
        return to_route('permission.index')->with(
            'success', 'Permission updated successfully'
        );
    }


    
    public function destroy(string $id)
    {
        $permission = Permission::findOrFail($id);
        $permission->delete();

        return to_route('permission.index')
            ->with(
                'success', 
                'Permission deleted successfully'
            );
    }

}
