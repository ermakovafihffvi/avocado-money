<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoryExp extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('category_exp')->insert([
            ['title' => 'прочее', 'str_id' => 'other', 'limit' => 1000, 'isActive' => true],
            ['title' => 'проезд', 'str_id' => 'transport', 'limit' => 2600, 'isActive' => true],
            ['title' => 'подписки', 'str_id' => 'subscribe', 'limit' => 0, 'isActive' => true],
            ['title' => 'одежда', 'str_id' => 'cloth', 'limit' => 500, 'isActive' => true],
            ['title' => 'связь', 'str_id' => 'communications', 'limit' => 700, 'isActive' => true],
            ['title' => 'плёночные расходы', 'str_id' => 'photo', 'limit' => 2300, 'isActive' => true],
            ['title' => 'пожертвования', 'str_id' => 'donations', 'limit' => 100, 'isActive' => true],
            ['title' => 'лекарства', 'str_id' => 'medcines', 'limit' => 7000, 'isActive' => true],
            ['title' => 'доставка', 'str_id' => 'delivery', 'limit' => 200, 'isActive' => true],
            ['title' => 'хавка', 'str_id' => 'food', 'limit' => 2300, 'isActive' => true],
            ['title' => 'прочие медрасходы', 'str_id' => 'doctors', 'limit' => 3000, 'isActive' => true],
            ['title' => 'подарки', 'str_id' => 'presents', 'limit' => 700, 'isActive' => true],
            ['title' => 'кредит', 'str_id' => 'credit', 'limit' => 13912, 'isActive' => true],
            ['title' => 'особые (на переезд)', 'str_id' => 'moving', 'limit' => 'infty', 'isActive' => true],
            ['title' => 'особые (непредвиденные)', 'str_id' => 'unexpected', 'limit' => 'infty', 'isActive' => true],
            ['title' => 'особые (крупные траты)', 'str_id' => 'bigexpenses', 'limit' => 'infty', 'isActive' => true],
        ]);
    }
}
