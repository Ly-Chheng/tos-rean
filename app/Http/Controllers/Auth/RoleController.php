<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission; 
use Illuminate\Http\Request;

class RoleController extends Controller
{
   
    public function index()
    {
        $roles = Role::all();
        return inertia('Cms/Roles/Index',[
            'roles' => $roles
        ]);
    }

    public function create()
    {
        $permissions = Permission::all(['id', 'name']);

        return inertia('Cms/Roles/CreateRole', [
            'permissions' => $permissions
        ]);
    }


    public function store(Request $request)
    {
        // dd($request->all());
       $validated = $request->validate([
            'name' => 'required|unique:roles,name',
            'permissions' => 'required|array',
            'permissions.*' => 'exists:permissions,id',
        ], [
            'name.required' => 'Field is required.',
            'permissions.required' => 'Field is required.',
        ]);

        $role = Role::create(['name' => $validated['name']]);
        $role->syncPermissions($validated['permissions']);
        return redirect()->route('roles.index')->with('success', 'Role created successfully');
    }

   
    public function show(string $id)
    {
        //
    }

    
    public function edit(string $id)
    {
        $role = Role::findOrFail($id);
        $permissions = Permission::all(['id', 'name']);
        $rolePermissions = $role->permissions->pluck('id')->toArray();

        return inertia('Cms/Roles/UpdateRole', [
            'role' => $role,
            'permissions' => $permissions,
            'rolePermissions' => $rolePermissions,
        ]);
    }

    
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'name' => 'required|unique:roles,name,' . $id,
            'permissions' => 'required|array',
            'permissions.*' => 'exists:permissions,id',
        ], [
            'name.required' => 'Field is required.',
            'permissions.required' => 'Field is required.',
            'permissions.*.exists' => 'Permission ID :input does not exist.',
        ]);

        $role = Role::findOrFail($id);
        $role->update(['name' => $validated['name']]);
        $role->syncPermissions($validated['permissions']);

        return redirect()->route('roles.index')->with('success', 'Role updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $role = Role::findOrFail($id);
        $role->delete();

        return redirect()->route('roles.index')->with('success', 'Role deleted successfully');
    }

}
