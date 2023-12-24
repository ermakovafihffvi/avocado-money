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
                ['title' => 'прочее', 'str_id' => 'other', 'limit' => 300, 'isActive' => true, 'special' => false],
                ['title' => 'проезд', 'str_id' => 'transport', 'limit' => 300, 'isActive' => true, 'special' => false],
                ['title' => 'подписки', 'str_id' => 'subscribe', 'limit' => 5, 'isActive' => true, 'special' => false],
                ['title' => 'одежда', 'str_id' => 'cloth', 'limit' => 10, 'isActive' => true, 'special' => false],
                ['title' => 'связь', 'str_id' => 'communications', 'limit' => 10, 'isActive' => true, 'special' => false],
                ['title' => 'плёночные расходы', 'str_id' => 'photo', 'limit' => 100, 'isActive' => true, 'special' => false],
                ['title' => 'пожертвования', 'str_id' => 'donations', 'limit' => 0, 'isActive' => true, 'special' => false],
                ['title' => 'лекарства', 'str_id' => 'medcines', 'limit' => 300, 'isActive' => true, 'special' => false],
                ['title' => 'доставка', 'str_id' => 'delivery', 'limit' => 0, 'isActive' => true, 'special' => false],
                ['title' => 'хавка', 'str_id' => 'food', 'limit' => 1400, 'isActive' => true, 'special' => false],
                ['title' => 'прочие медрасходы', 'str_id' => 'doctors', 'limit' => 1000, 'isActive' => true, 'special' => false],
                ['title' => 'подарки', 'str_id' => 'presents', 'limit' => 10, 'isActive' => true, 'special' => false],
                ['title' => 'кредит', 'str_id' => 'credit', 'limit' => 0, 'isActive' => false, 'special' => false],
                ['title' => 'особые (на переезд)', 'str_id' => 'moving', 'limit' => 'infty', 'isActive' => true, 'special' => true],
                ['title' => 'особые (непредвиденные)', 'str_id' => 'unexpected', 'limit' => 'infty', 'isActive' => true, 'special' => true],
                ['title' => 'особые (крупные траты)', 'str_id' => 'bigexpenses', 'limit' => 'infty', 'isActive' => true, 'special' => true],
                ["title" => "Жильё", "limit" => 3000, "isActive" => true, "str_id" => "house", 'special' => false], 
            ],
            ['str_id'], 
            ['limit', 'title', 'isActive', 'special']
        );
    }
}
