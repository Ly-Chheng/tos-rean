<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User; // Assuming you have a User model
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::with('role')->get();
        return inertia('Cms/User/Index', [
            'users' => $users->map(function ($user) {
                // log($user);
                return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'status' => $user->status,
                'roles' => $user->role ? $user->role->name : 'No Role',
                'created_at' => $user->created_at ? $user->created_at->toDateTimeString() : 'N/A',
                'updated_at' => $user->updated_at ? $user->updated_at->toDateTimeString() : 'N/A',
                'phone' => $user->phone ?: 'N/A', // Added for more detail
                'email_verified_at' => $user->email_verified_at ? $user->email_verified_at->toDateTimeString() : 'N/A', // Added
                'success' => session('success'),
            ];
            }),
        ]);
    }

    public function create()
    {
        return inertia('Cms/User/CreateUser', [
            'roles' => Role::all()->map(function ($role) {
                return [
                    'id' => $role->id,
                    'name' => $role->name,
                ];
            }),
        ]);
    }

   
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed',
            'roles_id' => 'required',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'roles_id' => $validated['roles_id'],
            'password' => Hash::make($validated['password']), // using Hash
        ]);

        return redirect()->route("users.index")->with('success', 'User created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::with('roles')->findOrFail($id);

        return inertia('Cms/User/Show', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'status' => $user->status,
                'roles' => $user->roles->pluck('name')->join(', ') ?: 'No Role',
                'created_at' => $user->created_at,
                'phone' => $user->phone ?: 'N/A',
                'email_verified_at' => $user->email_verified_at,
                'updated_at' => $user->updated_at,
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return inertia('Cms/User/UpdateUser', [
            'user' => User::with('role')->findOrFail($id),
            'roles' => Role::all()->map(function ($role) {
                return [
                    'id' => $role->id,
                    'name' => $role->name,
                ];
            }),
        ]);
    }

   
    public function update(Request $request, string $id)
    {
        $user = User::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
            'password' => 'nullable|min:6|confirmed',
            'roles' => 'required|exists:roles,id',
            'active' => 'boolean',
        ]);

        // Update user fields
        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->status = $validated['active'] ? 1 : 0; // Map boolean to 0/1

        // Update password only if provided
        if (!empty($validated['password'])) {
            $user->password = Hash::make($validated['password']);
        }

        $user->save();

        // Sync roles using Spatie
        $user->syncRoles([$validated['roles']]);

        return redirect()->route("users.index")->with('success', 'User updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->route("users.index")->with('success', 'User deleted successfully!');
    }
}
