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

function UserIncomeTable(props) {
    let incomeObj = props.incomeObj;

    return (
        <>
            <Typography variant="h3" gutterBottom>Incomes</Typography>
            <TableContainer component={Paper} style={{marginBottom:"50px"}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Sum</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {incomeObj.details.map((income) => (
                            <TableRow key={"income_id_" + income.id}>
                                <TableCell>
                                    {income.desc}
                                </TableCell>
                                <TableCell>
                                    {income.created_at}
                                </TableCell>
                                <TableCell>
                                    {income.sum}
                                </TableCell>
                                <TableCell>
                                    <IconButton aria-label="delete" size="large" onClick={(e)=>{props.handleDelete(e, income.id, "incomes")}}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton aria-label="" onClick={() => {
                                        props.setOpen(true); 
                                        props.setMoneyType("incomes");
                                        props.setDataToUpdate({
                                            "id": income.id,
                                            "desc": income.desc,
                                            "sum": income.sum
                                        })
                                    }}>
                                        <SvgIcon viewBox="0 0 32 32">
                                            <path d="M12 20l4-2 14-14-2-2-14 14-2 4zM9.041 27.097c-0.989-2.085-2.052-3.149-4.137-4.137l3.097-8.525 4-2.435 12-12h-6l-12 12-6 20 20-6 12-12v-6l-12 12-2.435 4z" />
                                        </SvgIcon>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default UserIncomeTable;