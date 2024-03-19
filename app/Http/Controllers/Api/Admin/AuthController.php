<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function Login(LoginRequest $request): \Illuminate\Foundation\Application|\Illuminate\Http\Response|\Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory
    {
        $credentials=$request->validated();
        if (!Auth::attempt($credentials)){
            return response([
                'message'=>'Provided email or password is incorrect'
            ],422);

        }
        if (auth()->user()->status===0){
            return response([
                'message'=>'You are not allowed to access an admin area',
            ],423);
        }

        /** @var User $user */
        $user=Auth::user();
        $token=$user->createToken('main')->plainTextToken;
        return response(compact('user','token'));
    }

    public function Logout(Request $request): \Illuminate\Foundation\Application|\Illuminate\Http\Response|\Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory
    {
        /** @var User $user */
        $user=$request->user();
        $user->currentAccessToken()->delete();
        return response('',204);
    }
}
