import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { categoryExpSelector } from '../../redux/caregoryExpReducer/categoryExpSelector';
import { categoryExpInitiate } from '../../redux/caregoryExpReducer/actions';
import { loadingCategoryExpSelector } from "../../redux/caregoryExpReducer/categoryExpSelector";
import { homeSelector, loadingHomeSelector } from '../../redux/homeReducer/homeSelector';
import { homeInitiate } from '../../redux/homeReducer/actions';
import { categorySavSelector, loadingCategorySavSelector } from '../../redux/categorySavReducer/categoryExpSelector';
import { categorySavInitiate } from '../../redux/categorySavReducer/actions';
import RemainingMoneyManager from '../../functions/evalExpenses';

import HomeExpensedTable from '../basecomponents/HomeExpensedTable';
import HomeIncomeTable from '../basecomponents/HomeIncomeTable';
import HomeSavedTable from '../basecomponents/HomeSavedTable';
import Loading from '../Loading';

function Home() {
    const dispatch = useDispatch();
    const categoriesArr = useSelector(categoryExpSelector);
    const homeData = useSelector(homeSelector);
    const categoriesSaving = useSelector(categorySavSelector);

    const loadingCatExp = useSelector(loadingCategoryExpSelector);
    const loadingHomeData = useSelector(loadingHomeSelector);
    const loadingCatSav = useSelector(loadingCategorySavSelector);

    useEffect(()=>{
        dispatch(categoryExpInitiate());
        dispatch(homeInitiate());
        dispatch(categorySavInitiate());
    }, [])

    function evaluateRemaining(category, wasted){
        if(!isNaN(category.limit)){
            return category.limit - wasted;
        } else {
            return "--"
        }
    }

    function summExpenses() {
        let sum = 0;
        for(let category in homeData.expenses.common){
            if(category != "unexpected" && category != "moving" && category != "bigexpenses"){
                if(categoriesArr.find(cat => cat.str_id === category).isActive){
                    sum += homeData.expenses.common[category];
                }
            }
        }
        return sum;
    }

    function summLimits() {
        let summLimit = 0;
        categoriesArr.forEach(category => {
            if(!isNaN(category.limit) && category.str_id != "unexpected" && category.str_id != "moving" && category.str_id != "bigexpenses"){
                if(category.isActive){
                    summLimit += Number(category.limit);
                }
            } 
        })
        return summLimit;
    }
    function summRemainings(){
        let commonLimitRemainings = 0;
        categoriesArr.forEach(category => {
            if(!isNaN(category.limit) && category.str_id != "unexpected" && category.str_id != "moving" && category.str_id != "bigexpenses"){
                if(category.isActive){
                    commonLimitRemainings = Number(Number(commonLimitRemainings) 
                                            + Number(category.limit) 
                                            - Number(homeData.expenses.common[category.str_id])); 
                }
            } 
        })
        return commonLimitRemainings;
    }
    
    if(loadingCatExp || loadingCatSav || loadingHomeData || homeData.length == 0 || categoriesSaving == 0){
        return (
            <>        
                <Loading/>
            </>
        );
    } else {

        const moneyManager = new RemainingMoneyManager(homeData, categoriesSaving);
        let expenses = moneyManager.getRemaining();

        return (
            <>    
                <div className='userpage-table-block'>
                    <HomeSavedTable 
                        expenses={ expenses } 
                        categoriesSaving={ categoriesSaving }
                    ></HomeSavedTable>
                </div>
                
                <div className='userpage-table-block'>
                    <HomeIncomeTable homeData={ homeData }></HomeIncomeTable>
                </div>

                <div className='userpage-table-block'>
                    <HomeExpensedTable 
                        categoriesArr={ categoriesArr } 
                        homeData={ homeData }
                        evaluateRemaining={ evaluateRemaining }
                        summExpenses={ summExpenses }
                        summLimits={ summLimits }
                        summRemainings={ summRemainings }
                    ></HomeExpensedTable>
                </div>
            </>
        );
    }
}


export default Home;