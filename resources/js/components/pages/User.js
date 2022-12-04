import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from "react-redux";
import { userPageSelector } from '../../redux/userPageReducer/userPageSelector';
import { userPageInitiate } from '../../redux/userPageReducer/actions';
import { loadingUserPageSelector} from "../../redux/userPageReducer/userPageSelector";

import { userPagePost, userPageUpdate, userPageDelete } from '../../redux/userPageReducer/actions';

import AddMoneyModal from "../basecomponents/AddMoneyModal";
import UserExpensesTable from '../basecomponents/UserExpensesTable';
import UserIncomeTable from '../basecomponents/UserIncomeTable';


function User() {
    let params = useParams();

    const dispatch = useDispatch();
    const userPageArr = useSelector(userPageSelector);
    const loading = useSelector(loadingUserPageSelector);
    const [pop, setPop] = useState(false); 

    let totalExpenses = 0;

    const [categorieID, setCat] = useState(0);
    const [desc, setDesc] = useState('');
    const [sum, setSum] = useState(0);
    const [moneyType, setMoneyType] = useState("");
    const [dataToUpdate, setDataToUpdate] = useState({});

    const [open, setOpen] = useState(false);
    const updateOpenState = () => {
        setOpen(false);
    }

    const handleInput = (field, e) => {
        switch(field){
            case "category_id":
                setCat(e.target.value);
                break;
            case "desc":
                setDesc(e.target.value);
                break;
            case "money_type":
                setMoneyType(e.target.value);
                break;
            case "sum":
                setSum(e.target.value);
                break;
        }
    }

    const handleUpdate = (e, id) => {
        e.preventDefault();
        let catId = 0;
        let descStr = "";
        let sumNum = 0;
        if(Object.keys(dataToUpdate).length > 0){
            if(categorieID == 0 && dataToUpdate.category_id != null && dataToUpdate.category_id != undefined){
                catId = dataToUpdate.category_id;
            }
            if(desc == ""){
                descStr = dataToUpdate.desc;
            }
            if(sum == 0){
                sumNum = dataToUpdate.sum;
            }
        }

        let resCatId = categorieID ? categorieID : catId;
        let resDesc = desc ? desc : descStr;
        let resSum = sum ? sum : sumNum;
        //console.log({"id": id, "category_id": resCatId, "desc": resDesc, "user_id": params.userId, "sum": resSum, "money_type": moneyType});
        updateOpenState();
        setPop((prevState) => {return !prevState});
        dispatch(userPageUpdate({"id": id, "category_id": resCatId, "desc": resDesc, "user_id": params.userId, "sum": resSum, "money_type": moneyType}));
    }

    const handleSubmitMoney = (e) => {
        e.preventDefault();
        //console.log({"category_id": categorieID, "desc": desc, "user_id": params.userId, "sum": sum, "money_type": moneyType});
        updateOpenState();
        setPop((prevState) => {return !prevState});
        dispatch(userPagePost({"category_id": categorieID, "desc": desc, "user_id": params.userId, "sum": sum, "money_type": moneyType}));
    }

    const handleDelete = (e, id, moneyType) => {
        e.preventDefault();
        updateOpenState();
        setPop((prevState) => {return !prevState});
        dispatch(userPageDelete({"id": id, "money_type": moneyType}));
    }

    const countTotalExp = () => {
        for(let category in userPageArr.expenses){
            totalExpenses += userPageArr.expenses[category].total;
        }
    }

    useEffect(()=>{
        dispatch(userPageInitiate(params.userId));
    }, [pop, params.userId])

    if(loading || Object.keys(userPageArr).length == 0){
        return (
            <>        
                Loading
            </>
        );
    } else {
        countTotalExp();
        let expensesObj = userPageArr.expenses;
        let incomeObj = userPageArr.income;
        let userInfo = userPageArr.user;

        let catList = userPageArr.catList;

        return (
            <>
                <div className='userpage-table-block'>
                    <UserExpensesTable
                        expensesObj={ expensesObj }
                        handleDelete={ handleDelete }
                        open={ open }
                        setOpen={ setOpen }
                        setMoneyType={ setMoneyType }
                        setDataToUpdate={ setDataToUpdate }
                        handleUpdate={ handleUpdate }
                    ></UserExpensesTable>
                    <div className='userpage-buttons-block'>
                        <Typography variant="h4" gutterBottom>Expenses total: {totalExpenses}</Typography>
                        <Button onClick={() => {setOpen(true); setMoneyType("expenses")}} variant="contained" size="large">Add expense</Button>
                        <AddMoneyModal 
                            open={ open } 
                            updateOpenState={ updateOpenState } 
                            type={ moneyType } 
                            handleSubmitMoney={ handleSubmitMoney } 
                            handleInput={ handleInput }
                            handleUpdate={ handleUpdate }
                            catList={ catList }
                            dataToUpdate={ dataToUpdate }
                            setDataToUpdate={ setDataToUpdate }
                        ></AddMoneyModal>
                    </div>
                </div>

                <div className='userpage-table-block'>
                    <UserIncomeTable 
                        incomeObj={incomeObj}
                        handleDelete={handleDelete}
                        open={ open }
                        setOpen={ setOpen }
                        setMoneyType={ setMoneyType }
                        setDataToUpdate={ setDataToUpdate }
                        handleUpdate={ handleUpdate }
                    ></UserIncomeTable>
                    <div className='userpage-buttons-block'>
                        <Typography variant="h4" gutterBottom>Incomes total: {incomeObj.total}</Typography>
                        <Button onClick={() => {setOpen(true); setMoneyType("incomes")}} variant="contained" size="large">Add income</Button>
                    </div>
                </div>
           </>
        );
    }
}


export default User;