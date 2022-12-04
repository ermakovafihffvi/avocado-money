<?php

namespace App\Http\Controllers\MoneyManager\User;
use App\Http\Controllers\Controller;
use App\Models\UserToGroup as ModelUserToGroup;
use Illuminate\Http\Request;
use Carbon\Carbon;

class UserToGroup extends Controller
{
    /**
     * все группы пользователя
     */
    public function getUsersGroupIds($userId){
        $res = [];
        $arr = ModelUserToGroup::select('group_id')
            ->where('user_id', '=', $userId)
            ->get();

        foreach($arr as $item){
            $res["group_ids"][] = $item->group_id;
        }
        return $res;
    }

    /**
     * принадлежит ли пользователь группе
     */
    public function isUserInGroup($userId, $groupId){
        $arr = [];
        $arr = ModelUserToGroup::select('id')
            ->where('user_id', '=', $userId)
            ->where('group_id', '=', $groupId)
            ->get();
        if(count($arr) > 0){
            return true;
        } else {
            return false;
        }
    }
}