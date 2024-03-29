import React, { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';

import DeleteIcon from '@mui/icons-material/Delete';

function Row (props) {
    let category = props.category;
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <TableRow key={"cat_" + category[1].name}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>

                    {category[1].name}

                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Sum</TableCell>
                                    <TableCell>Source</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {category[1].details_arr.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell></TableCell>
                                        <TableCell >{row.date}</TableCell>
                                        <TableCell >{row.sum}</TableCell>
                                        <TableCell >{row.source}</TableCell>
                                        <TableCell>
                                            <IconButton aria-label="delete" size="large" onClick={(e)=>{props.handleDelete(e, row.id)}}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );

}

function SavingSavedTable(props) {
    let categories = props.categories;

    return (
        <>
            <Typography variant="h3" gutterBottom>Отложенные</Typography>
            <TableContainer component={Paper} style={{marginBottom:"50px"}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map((category) => (
                            <Row 
                                category={ category } 
                                handleDelete={ props.handleDelete }
                            ></Row>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default SavingSavedTable;