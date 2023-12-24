class RemainingMoneyManager {
    constructor(homeArr, categoriesSaving){
        this.remaining = {};
        this.categoryArr = {};
        this.evalExpenses(homeArr, categoriesSaving);
    }
    getRemaining(){
        return this.remaining;
    }
    getCategoryArr() {
        return this.categoryArr;
    }
    evalExpenses(homeArr, categoriesSaving){
        
        let remaining = {};

        let additionalArr = {};
        categoriesSaving.forEach(category => {
            additionalArr[category.str_id] = {
                "title": category.title,
                "str_id": category.str_id,
                "sum": 0
            }; //массив в котором будем отсчитывать заполеннность лимита
        });
    
        let remSum = 0;
        for(let i in homeArr.expenses.users){
            remSum = homeArr.incomes.users[i].total - homeArr.expenses.users[i].total; //остаток для даннного юзера без учёта трат на особые категории
    
            remaining[i] = {
                "userName": homeArr.expenses.users[i].name,
                "remSum": 0,
                "categories": {} 
            };

            //old logic
            /* 
            categoriesSaving.forEach(category => {

                if((remSum > (category.limit - additionalArr[category.str_id].sum)) && category.limit != 0){ //если юзер может заполнить категорию до конца
                    remaining[i]["categories"][category.str_id] = category.limit - additionalArr[category.str_id].sum;
                    remSum -= (category.limit - additionalArr[category.str_id].sum);
                    additionalArr[category.str_id].sum = category.limit;
                } else {
                    remaining[i]["categories"][category.str_id] = remSum;
                    additionalArr[category.str_id].sum += remSum;
                    remSum = 0;
                }
                remaining[i]["remSum"] += remaining[i]["categories"][category.str_id];

            });*/
            
            //new logic 24.12.2023
            remaining[i]["remSum"] = remSum;
        }

        this.remaining = remaining;
        this.categoryArr = additionalArr;
    }

}

export default RemainingMoneyManager;