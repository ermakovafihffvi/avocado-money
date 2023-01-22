import * as React from 'react';
import { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    display: 'flex',
    flexDirection: 'column',
    minHeight: 200,
    justifyContent: 'space-evenly',
};

export default function ChangeSavingSumModal(props) {
    
    const [sum, setSum] = useState(0);

    const handleInput = (e) => {
        e.preventDefault();
        //console.log(e.target.value);
        setSum(e.target.value);
    }

    useEffect(()=>{

    }, [props.open])

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
                        <TextField
                            id="outlined-multiline-flexible" className=''
                            label="Sum"
                            type="desc" onChange={(e)=>handleInput(e)} 
                        />
                        <Button 
                            variant="contained" 
                            value="confirm" 
                            onClick={(e) => {
                                props.handleConfirm(props.rowStrId, sum); props.setOpen(false)}}
                        >Confirm</Button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}