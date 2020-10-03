<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Validator;

class ApiController extends Controller
{
    //
    use RegistersUsers;

    public function index (Request $request){
        $rules = [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6'],
        ];
        $validator = Validator::make($request->all(), $rules);

        if($validator->fails()){
            return response()->json(['error' => $validator->messages()], 200);
        }else{
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            if(!empty($user)){
                return response()->json([
                    'success' => 200,
                    'name' => $user->name,
                    'email'=> $user->email,
                    'token'=> $user->createToken('Token Name')->accessToken
                ], 200);
            }
        }
    }
}
