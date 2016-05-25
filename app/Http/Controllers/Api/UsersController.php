<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function index()
    {
    	return User::latest()->get();
    }

    public function show($user)
    {
    	return $user;
    }

    public function store(Request $request)
    {
    	return User::create($request->all());
    }

    public function destroy($user)
    {	
    	$user->delete();
        return User::latest()->get();
    }
}
