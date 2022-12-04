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

function HomeIncomeTable(props) {
    let homeData = props.homeData;

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={4}>Incomes (total = {homeData.incomes.total})</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(homeData.incomes.users).map((key) => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <NavLink to={`/user/${key}`}>
                                        {homeData.incomes.users[key].name}
                                    </NavLink>
                                </TableCell>
                                <TableCell>{homeData.incomes.users[key].total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default HomeIncomeTable;