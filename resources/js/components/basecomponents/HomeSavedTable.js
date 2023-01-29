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
import { categoryExpError } from '../../redux/caregoryExpReducer/actions';

function HomeSavedTable(props) {
    let expenses = props.expenses;
    let savingCatArr = props.categoriesSaving;

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={5}>Saved for this month till now</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>User</TableCell>
                            {savingCatArr.map((catеgory) => (
                                <TableCell key={"category_" + catеgory.id}>{catеgory.title}</TableCell>
                            ))}
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(expenses).map((key) => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={"expenses_" + key}
                            >
                                <TableCell component="th" scope="row">
                        
                                    <NavLink to={`/user/${key}`}>
                                        {expenses[key].userName}
                                    </NavLink>
                                </TableCell>

                                {Object.keys(expenses[key].categories).map((category, index) => (
                                    <TableCell>{expenses[key].categories[category]}</TableCell>
                                ))}

                                <TableCell>{expenses[key].remSum > 0 ? expenses[key].remSum : 0}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default HomeSavedTable;