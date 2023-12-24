import * as React from 'react';
import { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { validateSumMoney } from '../../functions/sumMoneyValidation';
import { validateDescriptionMoney } from '../../functions/descriptionMoneyValidation';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AddMoneyModal(props) {

    const [errorsText, setErrorsText] = useState(false);
    const [errorsSum, setErrorsSum] = useState(false);

    let text = "";
    if(props.type == "expenses"){
        text = "Expenses";
    } else if(props.type == "incomes") {
        text = "Incomes";
    }

    let dataObj = {};
    let hasData = 0;
    if(Object.keys(props.dataToUpdate).length > 0){
        dataObj = props.dataToUpdate;
        hasData = 1;
    }

    useEffect(()=>{
        if(props.open == 0){
            setErrorsText(false);
            setErrorsSum(false);
            props.setDataToUpdate({});
        }
    }, [props.open])

    function handleText(e){
        let validationPassed = validateDescriptionMoney(e.target.value);
        if(!validationPassed){
            setErrorsText(true);
        } else {
            setErrorsText(false);
            props.handleInput('desc',e);
        }
    }

    function handleSum(e){
        let validationPassed = validateSumMoney(e.target.value);
        if(!validationPassed){
            setErrorsSum(true);
        } else {
            setErrorsSum(false);
            props.handleInput('sum',e);
        }
    }

    function handleSubmit(e){
        if(!errorsText && !errorsSum){
            if(hasData == 1){
                props.handleUpdate(e, dataObj.id);
            } else {
                props.handleSubmitMoney(e);
            }
        }
    }

    function handleSelect(e){
        props.handleInput('category_id',e);
    }

    return (
        <div> 
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.open}
                onClose={props.updateOpenState}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {text}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <form onSubmit={(e) => handleSubmit(e)} className='modalBox'>

                                <input hidden type="money_type" value={text} onChange={(e)=>props.handleInput('money_type',e)}/>

                                {props.type == "expenses"
                                    ?
                                        < div className='modalBoxItem'>
                                            <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                                            <Select 
                                                labelId="demo-simple-select-helper-label" fullWidth
                                                id="demo-simple-select-helper"
                                                label="Category"
                                                type="category_id" onChange={(e)=>handleSelect(e)}
                                                defaultValue={!hasData ? "Выберите категорию" : dataObj.category_id}
                                            >
                                                {props.catList.map((category) => (
                                                    <MenuItem value={category.id}>
                                                        {category.title}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </div>
                                    : <></>
                                }
 
                                
                                
                                <TextField
                                    id="outlined-multiline-flexible" className='modalBoxItem'
                                    label="Description"
                                    multiline
                                    maxRows={50}
                                    type="desc" onChange={(e)=>handleText(e)} 
                                    defaultValue={hasData ? dataObj.desc: ''}
                                    error={errorsText}
                                />
                                
                                <TextField
                                    id="outlined-multiline-flexible" className='modalBoxItem'
                                    label="Sum"
                                    multiline
                                    maxRows={4}
                                    type="sum" onChange={(e)=>handleSum(e)} 
                                    defaultValue={hasData ? dataObj.sum : ''}
                                    error={errorsSum}
                                />

                                {props.type == "expenses"
                                    ? 
                                    <Button 
                                        variant="contained" 
                                        disabled={
                                            errorsSum 
                                            || errorsText 
                                            || (props.categorieID == 0 && !hasData)
                                            || (props.desc == '' && !hasData)
                                            || (props.sum == '' && !hasData)
                                        } 
                                        type="submit" 
                                        value="Submit"
                                    >Submit</Button>
                                    : 
                                    <Button 
                                        variant="contained" 
                                        disabled={
                                            errorsSum 
                                            || errorsText
                                            || (props.desc == '' && !hasData)
                                            || (props.sum == '' && !hasData)
                                        } 
                                        type="submit" 
                                        value="Submit"
                                    >Submit</Button>
                                }
                                 <Typography component="div">
                                    <Box sx={{ fontStyle: 'italic', m: 1 }}>All fields required</Box>
                                </Typography>
                            </form>

                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
