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

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';

function Row (props) {
    let expensesObj = props.expensesObj;
    let category = props.category;
    const [openRow, setOpenRow] = React.useState(false);
    let categoryItemExp = props.categoriesArr.filter(cat => cat.str_id == category)[0];
    let remainSum = props.evaluateRemaining(categoryItemExp, props.homeData.expenses.common[categoryItemExp.str_id]);
    const styles = {
        remain_sum: {
            color: remainSum > 0 ? 'green' : 'red',
            width: props.width
        }
    };
    return (
        <React.Fragment>
            <TableRow key={"cat_" + expensesObj[category].details[0].title}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell style={{ width: props.width }}>
                                {expensesObj[category].details[0].title}
                            </TableCell>
                            <TableCell style={{ width: props.width }}>{categoryItemExp.limit}</TableCell>
                            <TableCell className='remain_sum' style={styles.remain_sum}>
                                {remainSum}
                            </TableCell>
                            <TableCell>
                                {expensesObj[category].total}

                                <IconButton
                                    aria-label="expand row"
                                    size="small"
                                    onClick={() => setOpenRow(!openRow)}
                                >
                                    {openRow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                
            </TableRow>
            <Collapse in={openRow} timeout="auto" unmountOnExit style={{margin: "15px 35px 15px 35px", backgroundColor: "#F5F5DC"}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Sum</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
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
                    </TableBody>
                </Table>
            </Collapse>
        </React.Fragment>
    );
}

function UserExpensesTable(props) {
    let expensesObj = props.expensesObj;
    let width = 150;
    return (
        <>
            <Typography variant="h3" gutterBottom>Expenses</Typography>
            <TableContainer component={Paper} style={{marginBottom:"50px"}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <Table>
                                <TableHead>
                                    <TableCell style={{width: width}}>Category</TableCell>
                                    <TableCell style={{width: width}}>Limit</TableCell>
                                    <TableCell style={{width: width}}>Remain</TableCell>
                                    <TableCell>Total</TableCell>
                                </TableHead>
                            </Table>
                        </TableRow>
                    </TableHead>
                    <TableBody>
 
                        {Object.keys(expensesObj).map((category, index) => (
                            <Row
                                width={ width }
                                expensesObj={ expensesObj }
                                category={ category }
                                setOpen={ props.setOpen }
                                setMoneyType={ props.setMoneyType }
                                setDataToUpdate={ props.setDataToUpdate }
                                handleDelete={ props.handleDelete }
                                homeData={ props.homeData }
                                categoriesArr={ props.categoriesArr }    
                                evaluateRemaining={ props.evaluateRemaining }                            
                            >
                            </Row>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default UserExpensesTable;