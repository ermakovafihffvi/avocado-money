import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { useDispatch, useSelector } from "react-redux";
import { categoryExpPageSelector } from '../../redux/categoryExpPageReducer/categoryExpPageSelector';
import { categoryExpPageInitiate } from '../../redux/categoryExpPageReducer/actions';
import { loadingCategoryExpPageSelector } from "../../redux/categoryExpPageReducer/categoryExpPageSelector";
import Loading from '../Loading';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Category() {
    let params = useParams();

    const dispatch = useDispatch();
    const categoryArr = useSelector(categoryExpPageSelector);
    const loading = useSelector(loadingCategoryExpPageSelector);

    useEffect(()=>{
        dispatch(categoryExpPageInitiate(params.name));
    }, [])

    if(loading || Object.keys(categoryArr).length == 0){
        return (
            <>        
                <Loading/>
            </>
        );
    } else {
        /*let users = Object.entries(categoryArr.users);
        onsole.log(users);*/
        return (
            <>
            <Typography variant="h3" gutterBottom>{categoryArr.category_name}</Typography>

            <TableContainer component={Paper} style={{marginBottom:"50px"}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Sum</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(categoryArr.users).map((key, index) => (
                            <>
                                <TableRow>
                                    <TableCell rowSpan={categoryArr.users[key].detail.length + 1}>
                                        <NavLink to={`/user/${categoryArr.users[key].id}`}>
                                            {categoryArr.users[key].name}
                                        </NavLink>
                                    </TableCell>
                                </TableRow>
                                {categoryArr.users[key].detail.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">{row.created_at}</TableCell>
                                        <TableCell>{row.sum}</TableCell>
                                        <TableCell>{row.desc}</TableCell>
                                    </TableRow>
                                ))}
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            </>
           
        );
    }
}


export default Category;