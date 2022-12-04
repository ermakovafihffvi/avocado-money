<?
namespace App\Http\Controllers\MoneyManager;

use Carbon\Carbon;
use Illuminate\Support\Facades\Config;

/**
 * Периоды расчётов расчётов
 */
class Periods
{
    //для отладки
    /*public function index($customStart = "", $customEnd = ""){
        $now = Carbon::now();
        $this->globalStartDate = Carbon::createFromDate("2020", "01", "01", $now->timezoneName);
        $this->customStart = $customStart;
        $this->customEnd = $customEnd;
        return $this->getPeriods();
    }*/
    public function __construct($startDate = "", $customStart = "", $customEnd = "")
    {
        if($startDate){
            $this->globalStartDate = $startDate;
        } else {
            $this->globalStartDate = date("01.01.1972");
        }
        $this->customStart = $customStart;
        $this->customEnd = $customEnd;
    }

    public function getPeriods()
    {
        $now = Carbon::now();
        return [
            "month_from_now" => [
                "start_date" => Carbon::now()->subMonth(),
                "end_date" => Carbon::now()
            ],
            "alltime" => [
                "start_date" => $this->globalStartDate, 
                "end_date" => Carbon::now()
            ],
            "month_22" => [
                "start_date" => Carbon::createFromDate($now->year, $now->month - 1, "22"),
                "end_date" => Carbon::createFromDate($now->year, $now->month, "22"),
            ],
            "custom_period" => [
                "start_date" => $this->customStart,
                "end_date" => $this->customEnd
            ],
        ];
    }

    public function setGlobalStartDate($startDate)
    {
        if($startDate){
            $this->globalStartDate = $startDate;
        }
    }

    public function setCustomPeriod($customStartYear, $customStartMonth, $customStartDay, $customEndYear, $customEndMonth, $customEndDay)
    {
        //if($customStart && $customEnd){
            $this->customStart = Carbon::create($customStartYear, $customStartMonth, $customStartDay);
            $this->customEnd = Carbon::create($customEndYear, $customEndMonth, $customEndDay);
        //}
    }
}
