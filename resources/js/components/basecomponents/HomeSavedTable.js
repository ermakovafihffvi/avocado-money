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

function HomeSavedTable(props) {
    let expenses = props.expenses;

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={4}>Saved for this month till now</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>User</TableCell>
                            <TableCell>Moving</TableCell>
                            <TableCell>Unexpected</TableCell>
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(expenses).map((key) => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                        
                                    <NavLink to={`/user/${key}`}>
                                        {expenses[key].userName}
                                    </NavLink>
                                </TableCell>
                                <TableCell>{expenses[key].moving}</TableCell>
                                <TableCell>{expenses[key].unexpected}</TableCell>
                                <TableCell>{expenses[key].remSum}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default HomeSavedTable;