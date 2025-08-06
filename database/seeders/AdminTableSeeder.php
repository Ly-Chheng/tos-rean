<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class AdminTableSeeder extends Seeder
{
    public function run()
    {
        $role = Role::create(['name' => 'lani']);
        $user = User::create([
            'roles_id' => $role->id,
            'name' => 'ROOT',
            'email' => 'root@gmail.com',
            'email_verified_at' => now(),
            'password' => bcrypt('123456')
        ]);
        $permissions = Permission::pluck('id', 'id')->all();
        $role->syncPermissions($permissions);
        $user->assignRole($role->name);
    }
}