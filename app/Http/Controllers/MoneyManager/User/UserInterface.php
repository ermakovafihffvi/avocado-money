<?
namespace App\Http\Controllers\MoneyManager\User;

/**
 * Периоды расчётов расчётов
 */
interface UserInterface
{
    public function getName();
    public function getId();
    public function setName();
    public function setId();
    
    public function getSumIncome();
    public function getIncomes();

    public function getSumExpenses();
    public function getExpenses();
}