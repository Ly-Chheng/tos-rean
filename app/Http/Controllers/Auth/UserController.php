<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User; // Assuming you have a User model
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserRequest;

class UserController extends Controller
{
    public function index()
    {
       $users = User::with('role')->orderBy('id', 'desc')->get();
        return inertia('Backend/users/index', [
            'success' => session('success'),
            'users' => $users->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'status' => $user->status,
                    'roles' => $user->role ? $user->role->name : 'No Role',
                    'created_at' => $user->created_at ? $user->created_at->toDateTimeString() : 'N/A',
                    'updated_at' => $user->updated_at ? $user->updated_at->toDateTimeString() : 'N/A',
                    'phone' => $user->phone ?: 'N/A'
                ];
            }),
        ]);
    }

    public function create()
    {
        return inertia('Backend/users/create', [
            'roles' => Role::all()->map(function ($role) {
                return [
                    'id' => $role->id,
                    'name' => $role->name,
                ];
            }),
        ]);
    }

   
    public function store(UserRequest $request)
    {
        $validated = $request->validated();

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'roles_id' => $validated['roles_id'],
            'password' => Hash::make($validated['password']),
        ]);
        return to_route("users.index")->with('success', 'User created successfully!');
    }
    public function show(string $id)
    {
        $user = User::with('roles')->findOrFail($id);
        return inertia('Backend/user/show', [
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

        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->status = $validated['active'] ? 1 : 0;
        if (!empty($validated['password'])) {
            $user->password = Hash::make($validated['password']);
        }
        $user->save();
        $user->syncRoles([$validated['roles']]);
        return to_route('users.index')->with('success', 'User updated successfully!');
    }   

    public function destroy(string $id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return redirect()->route("users.index")->with('success', 'User deleted successfully!');
    }
}
