<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/{path?}', function () {
    return view('reactapp');
});*/

Route::view('/', 'reactapp');
Route::view('/{path?}', 'reactapp');
Route::view('/{path?}/{name?}', 'reactapp'); //надо добавлять такие строчки, если понадобится обрабатывать урлы с большим количеством слешей
