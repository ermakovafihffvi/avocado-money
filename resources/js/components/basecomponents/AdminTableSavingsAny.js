import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import Loading from '../Loading';

function AdminTableSavingsAny(props) {
    let categoriesSaving = props.categoriesSaving;
    let sourceSaving = props.sourceSaving;

    const [cat, setCat] = useState(0);
    const [source, setSource] = useState(0);
    const [sum, setSum] = useState(0);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
    }, [loading, error, success])

    function handleInput(type, e){
        if(type == "category_id"){
            setCat(e.target.value);
        } else if(type == "source_id"){
            setSource(e.target.value);
        } else if(type == "sum"){
            setSum(e.target.value);
        }
    }

    async function handleConfirmAdditional(e){
        e.preventDefault();

        let object = {
            "category": cat,
            "source": source,
            "sum": sum
        };

        setLoading(true);
        await axios.post(`http://${window.location.hostname}/api/admin/confirm_saving_sum`, object)
        .then(({data}) => {
            setLoading(false);
            setSuccess(true);
        }).catch((e) => {setLoading(false); setError(true)});

    }

    return (
        <>
            <Typography variant="h5" component="h2" className='add-additional-title'>
                Добавить деньги из других источников
                <div className="svg-box">
                    {
                        success ?
                            <SvgIcon viewBox="0 0 20 20" sx={{color: "green"}}>
                                <path d="M2.93 17.070c-1.884-1.821-3.053-4.37-3.053-7.193 0-5.523 4.477-10 10-10 2.823 0 5.372 1.169 7.19 3.050l0.003 0.003c1.737 1.796 2.807 4.247 2.807 6.947 0 5.523-4.477 10-10 10-2.7 0-5.151-1.070-6.95-2.81l0.003 0.003zM15.66 15.66c1.449-1.449 2.344-3.45 2.344-5.66 0-4.421-3.584-8.004-8.004-8.004-2.21 0-4.211 0.896-5.66 2.344v0c-1.449 1.449-2.344 3.45-2.344 5.66 0 4.421 3.584 8.004 8.004 8.004 2.21 0 4.211-0.896 5.66-2.344v0zM6.7 9.29l2.3 2.31 4.3-4.3 1.4 1.42-5.7 5.68-3.7-3.7 1.4-1.42z"></path>
                            </SvgIcon> :
                            <></>
                    }
                    {
                        error ?
                            <SvgIcon viewBox="0 0 32 32" sx={{color: "red"}}>
                                <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
                                <path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
                            </SvgIcon> :
                            <></>
                    }
                    {
                        loading ?
                            <Loading /> :
                            <></>
                    }
                </div>
                
            </Typography>
            <Box>

                <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label" fullWidth
                    id="demo-simple-select-helper"
                    label="Category"
                    type="category_id" onChange={(e) => handleInput('category_id', e)}
                    defaultValue="Выберите категорию"
                >
                    {categoriesSaving.map((category) => (
                        <MenuItem value={category.str_id}>
                            {category.title}
                        </MenuItem>
                    ))}
                </Select>

                <InputLabel id="demo-simple-select-helper-label">Source</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label" fullWidth
                    id="demo-simple-select-helper"
                    label="Source"
                    type="source_id" onChange={(e) => handleInput('source_id', e)}
                    defaultValue="Выберите категорию"
                >
                    {sourceSaving.map((source) => (
                        <MenuItem value={source.str_id}>
                            {source.title}
                        </MenuItem>
                    ))}
                </Select>

                <div className='sum-and-confirm-box'>
                    <TextField
                        id="outlined-multiline-flexible" className=''
                        label="Sum"
                        type="desc" onChange={(e) => handleInput("sum", e)}
                    />
                    <Button
                        variant="contained"
                        value="confirm"
                        onClick={(e) => {
                            handleConfirmAdditional(e);
                        }}
                    >Confirm</Button>
                </div>

            </Box>
        </>
    )
}

export default AdminTableSavingsAny;