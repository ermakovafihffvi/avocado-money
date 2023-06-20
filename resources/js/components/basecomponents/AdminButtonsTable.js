import React, { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


function AdminButtonsTable(props) {

    let savingsArr = props.expenses;

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell>Sum</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(savingsArr).map((row) => (
                            <TableRow key={row[0]}>
                                <TableCell>
                                    <Typography variant="h5">
                                        {row[1].title}
                                    </Typography>
                                </TableCell>
                                <TableCell id="saving_sum">
                                    <Typography variant="h5">
                                        {row[1].sum}
                                    </Typography>
                                </TableCell>
                    
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default AdminButtonsTable;