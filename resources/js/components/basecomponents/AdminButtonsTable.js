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
import Button from '@mui/material/Button';

import ChangeSavingSumModal from './ChangeSavingSumModal';

function AdminButtonsTable(props) {

    let savingsArr = props.expenses;

    const [rowStrId, setRowStrID] = useState(0);
    const [open, setOpen] = useState(false);
    const updateOpenState = () => {
        setOpen(false);
    }
    useEffect(()=>{
    }, [])

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell>Sum</TableCell>
                            <TableCell>Submit</TableCell>
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
                                <TableCell className="saving_buttons_tc">

                                    <div className="saving_buttons_wrapper">
                                        <Button 
                                            variant="contained" 
                                            value="confirm" 
                                            onClick={(e) => 
                                                props.handleConfirm(row[0], e.target.parentNode.parentNode.parentNode.querySelector("#saving_sum").childNodes[0].innerHTML)}
                                        >Confirm</Button>
                                        <Button 
                                            value="correct"
                                            onClick={(e) => {setOpen(true); setRowStrID(row[0])}}
                                        >Correct</Button>
                                    </div>
                                
        
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>

            <ChangeSavingSumModal 
                open={ open } 
                setOpen={ setOpen }
                updateOpenState={ updateOpenState } 
                handleConfirm={ props.handleConfirm }
                rowStrId={ rowStrId }
            ></ChangeSavingSumModal>
        </>
    )
}

export default AdminButtonsTable;