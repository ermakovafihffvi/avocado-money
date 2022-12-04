import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import { useDispatch, useSelector } from "react-redux";
import { userSelector } from '../redux/userReducer/userSelector';
import { userInitiate } from '../redux/userReducer/actions';
import { loadingUserSelector} from "../redux/userReducer/userSelector";

import StyledMenu from "./basecomponents/StyledMenu";



function Layout() {
    const dispatch = useDispatch();
    const userInfoArr = useSelector(userSelector);
    const loading = useSelector(loadingUserSelector);

    const [value, setValue] = React.useState(0);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (newValue) => {
      setValue(newValue);
    };

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
      if(!(/user\/\d{1,}/.test(document.location.pathname))){
        handleChange(0)
      }
    };

    useEffect(()=>{
      dispatch(userInitiate());
      if((/user\/\d{1,}/.test(document.location.pathname))){
        handleChange(2);
      }
      if(document.location.pathname == "/savings"){
        handleChange(1);
      }
      if(document.location.pathname == "/"){
        handleChange(0);
      }
    }, [])


    if(loading || Object.keys(userInfoArr).length == 0){
      return (
          <>        
              Loading Layout
          </>
      );
    } else {
      return (
        <>
          <CssBaseline />
          <Container fixed>
            <header className='header'>
              <Box sx={{ width: '100%' }}>
                <Tabs value={value} aria-label="wrapped label tabs example">
                  <NavLink to={'/'}><Tab label="Home" value="0" onClick={(e) => handleChange(0)}/></NavLink>
                  <NavLink to={'/savings'}><Tab label="Savings" value="1" onClick={(e) => handleChange(1)}/></NavLink>
                
                  <div onClick={(e) => {handleClick(e); handleChange(2)}}>
                    <Tab label="Users" value="2" sx={{color: "#0d6efd", textDecoration: "underline"}}/>
                    <KeyboardArrowDownIcon sx={{color: "#0d6efd", marginLeft: "-20px", opacity: "0.6"}}/>
                  </div>
                
                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      'aria-labelledby': 'demo-customized-button',
                    }}

                    container={document.getElementsByTagName('header')[0]}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    {userInfoArr.map((user) => (
                      <NavLink to={`/user/${user.id}`} onClick={(e) => {handleChange(2)}}>
                        <MenuItem onClick={handleClose} disableRipple key={user.id}>
                          <PersonPinIcon fontSize="small" color="secondary"/>
                          {user.name}
                        </MenuItem>
                      </NavLink>
                    ))}

                  </StyledMenu>

                </Tabs>
              </Box>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer className='footer'>
              <Typography variant="h6" gutterBottom>&copy; Авокадо</Typography>
            </footer>
          </Container>

        </>
      );
    }
}
  
  export default Layout;