<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoryExpShek extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('category_exp')->upsert([
                ['title' => 'прочее', 'str_id' => 'other', 'limit' => 300, 'isActive' => true],
                ['title' => 'проезд', 'str_id' => 'transport', 'limit' => 300, 'isActive' => true],
                ['title' => 'подписки', 'str_id' => 'subscribe', 'limit' => 5, 'isActive' => true],
                ['title' => 'одежда', 'str_id' => 'cloth', 'limit' => 10, 'isActive' => true],
                ['title' => 'связь', 'str_id' => 'communications', 'limit' => 10, 'isActive' => true],
                ['title' => 'плёночные расходы', 'str_id' => 'photo', 'limit' => 100, 'isActive' => true],
                ['title' => 'пожертвования', 'str_id' => 'donations', 'limit' => 0, 'isActive' => true],
                ['title' => 'лекарства', 'str_id' => 'medcines', 'limit' => 300, 'isActive' => true],
                ['title' => 'доставка', 'str_id' => 'delivery', 'limit' => 0, 'isActive' => true],
                ['title' => 'хавка', 'str_id' => 'food', 'limit' => 1400, 'isActive' => true],
                ['title' => 'прочие медрасходы', 'str_id' => 'doctors', 'limit' => 1000, 'isActive' => true],
                ['title' => 'подарки', 'str_id' => 'presents', 'limit' => 10, 'isActive' => true],
                ['title' => 'кредит', 'str_id' => 'credit', 'limit' => 0, 'isActive' => true],
                ['title' => 'особые (на переезд)', 'str_id' => 'moving', 'limit' => 'infty', 'isActive' => true],
                ['title' => 'особые (непредвиденные)', 'str_id' => 'unexpected', 'limit' => 'infty', 'isActive' => true],
                ['title' => 'особые (крупные траты)', 'str_id' => 'bigexpenses', 'limit' => 'infty', 'isActive' => true],
                ["title" => "Жильё", "limit" => 3000, "isActive" => true, "str_id" => "house"], 
            ],
            ['str_id'], 
            ['limit', 'title', 'isActive']
        );
    }
}
