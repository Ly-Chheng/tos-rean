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
        $roles = Role::with('permissions')->get();
        return inertia('Backend/roles/index', [
            'roles' => $roles,
            'success' => session('success'),
        ]);
    }

    public function create()
    {
        $permissions = Permission::all(['id', 'name']);
        return inertia('Backend/roles/create', [
            'permissions' => $permissions
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|unique:roles,name',
            'permissions' => 'required|array',
            'permissions.*' => 'exists:permissions,id',
        ], [
            'name.required' => 'Field is required.',
            'name.unique' => 'Role name already exists.',
            'permissions.required' => 'Field is required.',
            'permissions.*.exists' => 'Permission ID :input does not exist.',
        ]);

        $role = Role::create(['name' => $validated['name']]);
        $role->syncPermissions($validated['permissions']);
        return to_route('roles.index')->with('success', 'Role created successfully');
    }

    public function show(string $id)
    {
        $role = Role::with('permissions')->findOrFail($id);
        $permissions = $role->permissions->pluck('name')->toArray();

        return inertia('Backend/roles/show', [
            'role' => $role,
            'permissions' => $permissions,
        ]);
    }

    public function edit(string $id)
    {
        $role = Role::with('permissions')->findOrFail($id);
        $permissions = Permission::all(['id', 'name']);
        $rolePermissions = $role->permissions->pluck('id')->toArray();

        return inertia('Backend/roles/edit', [
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
        return to_route('roles.index')->with('success', 'Role updated successfully');
    }

    public function destroy(string $id)
    {
        $role = Role::findOrFail($id);
        $role->delete();
        return to_route('roles.index')->with('success', 'Role deleted successfully');
    }
}