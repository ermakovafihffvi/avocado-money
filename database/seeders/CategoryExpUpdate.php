<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoryExpUpdate extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('category_exp')->where('str_id', 'other')->update([
            'title' => 'прочее', 'str_id' => 'other', 'limit' => 3500, 'isActive' => true
        ]);

        DB::table('category_exp')->where('str_id', 'transport')->update([
            'title' => 'проезд', 'str_id' => 'transport', 'limit' => 3000, 'isActive' => true
        ]);

        DB::table('category_exp')->where('str_id', 'subscribe')->update([
            'title' => 'подписки', 'str_id' => 'subscribe', 'limit' => 100, 'isActive' => true,
        ]);
        DB::table('category_exp')->where('str_id', 'cloth')->update([
            'title' => 'одежда', 'str_id' => 'cloth', 'limit' => 800, 'isActive' => true
        ]);
        DB::table('category_exp')->where('str_id', 'communications')->update([
            'title' => 'связь', 'str_id' => 'communications', 'limit' => 700, 'isActive' => true
        ]);
        DB::table('category_exp')->where('str_id', 'photo')->update([
            'title' => 'плёночные расходы', 'str_id' => 'photo', 'limit' => 2300, 'isActive' => true
        ]);
        DB::table('category_exp')->where('str_id', 'donations')->update([
            'title' => 'пожертвования', 'str_id' => 'donations', 'limit' => 0, 'isActive' => true
        ]);
        DB::table('category_exp')->where('str_id', 'medcines')->update([
            'title' => 'лекарства', 'str_id' => 'medcines', 'limit' => 6200, 'isActive' => true
        ]);
        DB::table('category_exp')->where('str_id', 'delivery')->update([
            'title' => 'доставка', 'str_id' => 'delivery', 'limit' => 1800, 'isActive' => true
        ]);
        DB::table('category_exp')->where('str_id', 'food')->update([
            'title' => 'хавка', 'str_id' => 'food', 'limit' => 5700, 'isActive' => true
        ]);
        DB::table('category_exp')->where('str_id', 'doctors')->update([
            'title' => 'прочие медрасходы', 'str_id' => 'doctors', 'limit' => 3000, 'isActive' => true
        ]);
        DB::table('category_exp')->where('str_id', 'presents')->update([
            'title' => 'подарки', 'str_id' => 'presents', 'limit' => 2000, 'isActive' => true
        ]);
        DB::table('category_exp')->where('str_id', 'credit')->update([
            'title' => 'кредит', 'str_id' => 'credit', 'limit' => 0, 'isActive' => true
        ]);
        DB::table('category_exp')->where('str_id', 'moving')->update([
    
            'title' => 'особые (на переезд)', 'str_id' => 'moving', 'limit' => 'infty', 'isActive' => true
        ]);
        DB::table('category_exp')->where('str_id', 'unexpected')->update([
            'title' => 'особые (непредвиденные)', 'str_id' => 'unexpected', 'limit' => 'infty', 'isActive' => true
        ]);
        DB::table('category_exp')->where('str_id', 'bigexpenses')->update([
            'title' => 'особые (крупные траты)', 'str_id' => 'bigexpenses', 'limit' => 'infty', 'isActive' => true
        ]);
    }
}