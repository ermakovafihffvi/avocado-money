import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { adminPageConfirmSaving, adminPageConfirmDeleting } from '../../redux/adminPageReducer/actions';
import { adminPageSelector } from "../../redux/adminPageReducer/adminPageSelector";
import { loadingAdminPageSelector } from "../../redux/adminPageReducer/adminPageSelector";
import { adminPageInitiate } from "../../redux/adminPageReducer/actions";
import { homeSelector, loadingHomeSelector } from '../../redux/homeReducer/homeSelector';
import { homeInitiate } from '../../redux/homeReducer/actions';
import { categorySavSelector, loadingCategorySavSelector } from '../../redux/categorySavReducer/categoryExpSelector';
import { categorySavInitiate } from '../../redux/categorySavReducer/actions';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import DeleteIcon from '@mui/icons-material/Delete';

import AdminButtonsTable from '../basecomponents/AdminButtonsTable';

import RemainingMoneyManager from '../../functions/evalExpenses';
import Loading from '../Loading';

function Admin() {
    const dispatch = useDispatch();

    const homeData = useSelector(homeSelector);
    const categoriesSaving = useSelector(categorySavSelector);

    const loadingHomeData = useSelector(loadingHomeSelector);
    const loadingCatSav = useSelector(loadingCategorySavSelector);

    const adminPageInfo = useSelector(adminPageSelector);
    const loadingAdminPage = useSelector(loadingAdminPageSelector);

    const [reload, setReload] = useState(false);

    useEffect(()=>{
        dispatch(adminPageInitiate());
        dispatch(homeInitiate());
        dispatch(categorySavInitiate());
    }, [reload])

    function handleConfirm(category, sum){
        dispatch(adminPageConfirmSaving({
            "category": category, 
            "sum": sum
        }));
        setReload(prevState => {return !prevState});
    }

    function handleDelete(e, id){
        dispatch(adminPageConfirmDeleting({
            "id": id,
        }));
        setReload(prevState => {return !prevState});
    }

    if(loadingAdminPage || loadingHomeData || loadingCatSav || homeData.length == 0){
        return (
            <>        
                <Loading/>
            </>
        );
    } else {
        const moneyManager = new RemainingMoneyManager(homeData, categoriesSaving);
        let moneySaved = moneyManager.getCategoryArr();
        return (
            <>   
                <Typography variant="h5" component="h2">
                    Жмакать кнопки на добавление надо осторожно! Рекомендуется жамакать раз в месяц - 22 числа. 
                    Перед этим проверить в табличке ниже, что денюжка по данной категории В ЭТОМ МЕСЯЦЕ ещё не добавлена.
                </Typography>

                <TableContainer component={Paper} style={{marginBottom:"50px"}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Category</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Sum</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminPageInfo.map((category) => (
                           
                                <TableRow key={category.category_id}>
                                    <TableCell >{category.category_title}</TableCell>
                                    <TableCell >{category.created_at}</TableCell>
                                    <TableCell >{category.sum}</TableCell>
                                    <TableCell>
                                        <IconButton aria-label="delete" size="large" onClick={(e)=>{handleDelete(e, category.id)}}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                                 
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <div className=''>
                    <AdminButtonsTable 
                        expenses={ moneySaved }
                        handleConfirm={ handleConfirm }
                    ></AdminButtonsTable>
                </div>
            </>
        );
    }
}


export default Admin;