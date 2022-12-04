<?php

use App\Http\Controllers\Pages\Category;
use App\Http\Controllers\Pages\Home;
use App\Http\Controllers\CategoryExp;
use App\Http\Controllers\CategorySav;
use App\Http\Controllers\MoneyManager\Periods;
use App\Http\Controllers\Pages\Saving;
use App\Http\Controllers\Pages\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MoneyManager\Expenses\ExpensesRequests;
use App\Http\Controllers\MoneyManager\Savings\SavingsRequests;
use App\Http\Controllers\MoneyManager\Incomes\IncomeRequests;
use App\Http\Controllers\MoneyManager\User\UserRequests;
use App\Http\Controllers\MoneyManager\User\UserToGroup;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::resource('category_exp', CategoryExp::class);
Route::resource('category_sav', CategorySav::class);
Route::get('userinfo', [UserRequests::class, "getBasicUserInfo"]);
//Route::resource('test', Periods::class);

Route::get('test',  [Periods::class, "index"]);
Route::post('test/post', [ExpensesRequests::class, "addExpense"]);
Route::post('test/update', [ExpensesRequests::class, "updateExpense"]);
Route::post('test/delete', [ExpensesRequests::class, "deleteExpense"]);

Route::get('home', [Home::class, "index"]); //даты
Route::get('category/{categoryStr}',  [Category::class, "index"]); //даты
Route::get('savings',  [Saving::class, "index"]);

Route::get('user/{userId}',  [User::class, "index"]); //даты
Route::post('user/expenses/post', [ExpensesRequests::class, "addExpense"]); 
Route::post('user/expenses/update', [ExpensesRequests::class, "updateExpense"]);
Route::post('user/expenses/delete', [ExpensesRequests::class, "deleteExpense"]);
Route::post('user/income/post', [IncomeRequests::class, "addIncome"]);
Route::post('user/income/update', [IncomeRequests::class, "updateIncome"]);
Route::post('user/income/delete', [IncomeRequests::class, "deleteIncome"]);

Route::get('user/{userId}/user_to_gr', [UserToGroup::class, "getUsersGroupIds"]);
Route::get('user/{userId}/user_to_gr/{groupId}', [UserToGroup::class, "isUserInGroup"]);

/*Route::post('login', LoginController::class, 'login');*/