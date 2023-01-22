<?php

use App\Http\Controllers\Pages\Category;
use App\Http\Controllers\Pages\Home;
use App\Http\Controllers\Pages\Admin;
use App\Http\Controllers\CategoryExp;
use App\Http\Controllers\CategorySav;
use App\Http\Controllers\SourceSav;
use App\Http\Controllers\MoneyManager\Periods;
use App\Http\Controllers\Pages\Saving;
use App\Http\Controllers\Pages\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MoneyManager\Expenses\ExpensesActions;
use App\Http\Controllers\MoneyManager\Savings\SavingsActions;
use App\Http\Controllers\MoneyManager\Incomes\IncomeActions;
use App\Http\Controllers\MoneyManager\User\UserActions;
use App\Http\Controllers\MoneyManager\User\UserToGroup;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\AuthController;
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
Route::resource('source_sav', SourceSav::class);
Route::get('userinfo', [UserActions::class, "getBasicUserInfo"]);
//Route::resource('test', Periods::class);

Route::get('test',  [Periods::class, "index"]);
Route::post('test/post', [ExpensesActions::class, "addExpense"]);
Route::post('test/update', [ExpensesActions::class, "updateExpense"]);
Route::post('test/delete', [ExpensesActions::class, "deleteExpense"]);

Route::get('home', [Home::class, "index"]); //даты
Route::get('category/{categoryStr}',  [Category::class, "index"]); //даты
Route::get('savings',  [Saving::class, "index"]);

Route::get('user/{userId}',  [User::class, "index"]); //даты
Route::post('user/expenses/post', [ExpensesActions::class, "addExpense"]);
Route::post('user/expenses/update', [ExpensesActions::class, "updateExpense"]);
Route::post('user/expenses/delete', [ExpensesActions::class, "deleteExpense"]);
Route::post('user/income/post', [IncomeActions::class, "addIncome"]);
Route::post('user/income/update', [IncomeActions::class, "updateIncome"]);
Route::post('user/income/delete', [IncomeActions::class, "deleteIncome"]);

Route::get('user/{userId}/user_to_gr', [UserToGroup::class, "getUsersGroupIds"]);
Route::get('user/{userId}/user_to_gr/{groupId}', [UserToGroup::class, "isUserInGroup"]);

Route::post('admin/confirm_saving_sum', [SavingsActions::class, "addSaving"]);
Route::post('admin/confirm_delete_saving', [SavingsActions::class, "deleteSaving"]);

Route::get('admin', [Admin::class, "index"]);

Route::post('login', [LoginController::class, 'simpleLogin']);
Route::post('logout', [LoginController::class, 'logout']);
Route::post('loginCheck', [AuthController::class, "checkIfAuth"]);
