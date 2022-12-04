const evalExpenses = function (categoriesArr, homeArr, categoriesSaving) {
    let remaining = {};
    //console.log(homeArr);
    //console.log("expenses");
    //console.log(homeArr.expenses.users[1]);
    for(let i in homeArr.expenses.users){
        let remSum = homeArr.incomes.users[i].total - homeArr.expenses.users[i].total;
        //console.log(i);
        //console.log(homeArr.expenses.users[i].name);
        remaining[i] = {
            "userName": homeArr.expenses.users[i].name, 
            "remSum": remSum,
            "unexpected": 0,
            "moving": remSum
        };

        if(homeArr.expenses.users[i].name == "Vatnik" 
            && remSum >= categoriesSaving.find(category => category.str_id === "unexpected").limit
        ){
            //console.log("in if");
            remaining[i]["unexpected"] = categoriesSaving.find(category => category.str_id === "unexpected").limit;
            remaining[i]["moving"] -= categoriesSaving.find(category => category.str_id === "unexpected").limit;
        }
    }
    return remaining;
}

export default evalExpenses;