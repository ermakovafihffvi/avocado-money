import React, { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

function HomeExpensedTable(props) {
    let categoriesArr = props.categoriesArr;
    let homeData = props.homeData;

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={4}>Expenses</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell>Expensed</TableCell>
                            <TableCell>Limit</TableCell>
                            <TableCell>Remaining</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categoriesArr.map((category) => (
                            (category.str_id != "moving" && category.str_id != "unexpected" && category.str_id != "bigexpenses" && category.isActive) ? (
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <NavLink to={`/category/${category.str_id}`}>{category.title}</NavLink>
                                    </TableCell>
                                    <TableCell>{homeData.expenses.common[category.str_id]}</TableCell>
                                    <TableCell>{category.limit}</TableCell>
                                    <TableCell>{props.evaluateRemaining(category, homeData.expenses.common[category.str_id])}</TableCell>
                                </TableRow>
                            ) : null
                            
                        ))}
                        <TableRow>
                            <TableCell>Total</TableCell>
                            <TableCell>{props.summExpenses()}</TableCell>
                            <TableCell>{props.summLimits()}</TableCell>
                            <TableCell>{props.summRemainings()}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default HomeExpensedTable;