import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { savingsSelector } from '../../redux/savingsReducer/savingsSelector';
import { savingsInitiate } from '../../redux/savingsReducer/actions';
import { loadingSavingsSelector } from "../../redux/savingsReducer/savingsSelector";

import { adminPageConfirmDeleting } from '../../redux/adminPageReducer/actions';
import { loadingAdminPageSelector } from "../../redux/adminPageReducer/adminPageSelector";

import SavingTotalTable from '../basecomponents/SavingTotalTable';
import SavingSavedTable from '../basecomponents/SavingSavedTable';
import SavingExpensedTable from '../basecomponents/SavingExpensesTable';
import Loading from '../Loading';


function Savings() {
    
    const dispatch = useDispatch();
    const savingsArr = useSelector(savingsSelector);
    const loading = useSelector(loadingSavingsSelector);

    const loadingAdminPage = useSelector(loadingAdminPageSelector);

    const [reload, setReload] = useState(false);

    useEffect(()=>{
        dispatch(savingsInitiate());
    }, [reload])

    const handleDelete = (e, id) => {
        dispatch(adminPageConfirmDeleting({
            "id": id,
        }));
        setReload(prevState => {return !prevState});
    }

    if(loading || loadingAdminPage || savingsArr.length == 0){
        return (
            <>        
                <Loading/>
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
                <SavingSavedTable 
                    categories={ categories }
                    handleDelete={ handleDelete }
                ></SavingSavedTable>
            </div>
            <div className='userpage-table-block'>
                <SavingExpensedTable savingsArr={ savingsArr }></SavingExpensedTable>
            </div>
            </>
           
        );
    }
}


export default Savings;