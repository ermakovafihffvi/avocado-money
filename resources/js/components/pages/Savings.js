import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { savingsSelector } from '../../redux/savingsReducer/savingsSelector';
import { savingsInitiate } from '../../redux/savingsReducer/actions';
import { loadingSavingsSelector } from "../../redux/savingsReducer/savingsSelector";
import SavingTotalTable from '../basecomponents/SavingTotalTable';
import SavingSavedTable from '../basecomponents/SavingSavedTable';
import SavingExpensedTable from '../basecomponents/SavingExpensesTable';


function Savings() {
    
    const dispatch = useDispatch();
    const savingsArr = useSelector(savingsSelector);
    const loading = useSelector(loadingSavingsSelector);

    useEffect(()=>{
        dispatch(savingsInitiate());
    }, [])

    if(loading || savingsArr.length == 0){
        return (
            <>        
                Loading
            </>
        );
    } else {
        let categories = Object.entries(savingsArr.categories);

        let totalCategories = Object.entries(savingsArr.total);
        
        return (
            <>
            <div className='userpage-table-block'>
                <SavingTotalTable totalCategories={ totalCategories }></SavingTotalTable>
            </div>
            <div className='userpage-table-block'>
                <SavingSavedTable categories={ categories }></SavingSavedTable>
            </div>
            <div className='userpage-table-block'>
                <SavingExpensedTable savingsArr={ savingsArr }></SavingExpensedTable>
            </div>
            </>
           
        );
    }
}


export default Savings;