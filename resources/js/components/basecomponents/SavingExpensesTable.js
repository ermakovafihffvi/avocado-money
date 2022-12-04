import React, { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function SavingExpensedTable(props) {
    let savingsArr = props.savingsArr;
console.log(savingsArr);
    return (
        <>
            <Typography variant="h3" gutterBottom>Траты из отложенных</Typography>
            <TableContainer component={Paper} style={{marginBottom:"50px"}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Sum</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>User</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {savingsArr.expenses.map((row) => (
                            <TableRow key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.created_at}</TableCell>
                                <TableCell>{row.sum}</TableCell>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default SavingExpensedTable;