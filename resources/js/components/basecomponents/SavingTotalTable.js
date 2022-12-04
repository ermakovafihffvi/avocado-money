import React, { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function SavingTotalTable(props) {
    let totalCategories = props.totalCategories;

    return (
        <>
            <Typography variant="h3" gutterBottom>Итого</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell>Sum</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {totalCategories.map((row) => (
                            <TableRow
                                key={row[0]}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row[1].title}</TableCell>
                                <TableCell>{row[1].sum}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default SavingTotalTable;