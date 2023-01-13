<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use App\Repositories\UserRepository;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;
    //protected $redirectTo = 'http://laravel.loc/profile';

    /*protected function redirectTo()
    {
        if (auth()->user()->role_id == 1) {
            return '/admin';
        }
        return redirect(route('updateProfile'));
    }*/

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    public function __invoke(Request $request)
    {
        return "Welcome to our homepage";
    }
    public function loginGH() {
        if (Auth::check()) {
            return redirect()->route('home');
        }
        return Socialite::driver('github')->redirect();
    }

    public function responseGH(UserRepository $userRepository) {
        if (!Auth::check()) {
            $user = Socialite::driver('github')->user();

            $userInSystem = $userRepository->getUserBySocId($user, 'github');
            Auth::login($userInSystem);

        }
        return redirect()->route('home');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
 
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
 
            return redirect()->intended('dashboard');
        }
 
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }
}