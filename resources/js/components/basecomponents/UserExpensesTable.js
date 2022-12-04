import React, { useState, useEffect } from 'react';

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

function UserExpensesTable(props) {
    let expensesObj = props.expensesObj;
    return (
        <>
            <Typography variant="h3" gutterBottom>Expenses</Typography>
            <TableContainer component={Paper} style={{marginBottom:"50px"}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Sum</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(expensesObj).map((category, index) => (
                            <>
                                <TableRow key={"cat_" + expensesObj[category].details[0].title}>
                                    <TableCell rowSpan={expensesObj[category].details.length + 1}>
                                        {expensesObj[category].details[0].title}
                                    </TableCell>
                                    <TableCell rowSpan={expensesObj[category].details.length + 1}>
                                        {expensesObj[category].total}
                                    </TableCell>
                                </TableRow>

                                {expensesObj[category].details.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.sum}</TableCell>
                                        <TableCell>{item.desc}</TableCell>
                                        <TableCell>{item.created_at}</TableCell>
                                        <TableCell>
                                            <IconButton aria-label="delete" size="large" onClick={(e)=>{props.handleDelete(e, item.id, "expenses")}}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton aria-label="" onClick={() => {
                                                props.setOpen(true); 
                                                props.setMoneyType("expenses"); 
                                                props.setDataToUpdate({
                                                    "id": item.id,
                                                    "desc": item.desc,
                                                    "sum": item.sum,
                                                    "category_id": expensesObj[category].details[0].category_id
                                                })}}
                                            >
                                                <SvgIcon viewBox="0 0 32 32">
                                                    <path d="M12 20l4-2 14-14-2-2-14 14-2 4zM9.041 27.097c-0.989-2.085-2.052-3.149-4.137-4.137l3.097-8.525 4-2.435 12-12h-6l-12 12-6 20 20-6 12-12v-6l-12 12-2.435 4z" />
                                                </SvgIcon>
                                            </IconButton>
                                        </TableCell>
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

export default UserExpensesTable;