import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Savings from './pages/Savings';
import Category from './pages/Category';
import User from './pages/User';
import NotFound from './NotFound'; 
import Test from './pages/Test';
import Admin from './pages/Admin';
import '../../css/app.css';
import Login from './pages/Login';

import uuidv4 from 'uuidv4';
import createCache from '@emotion/cache';
import { CacheProvider, css } from '@emotion/react' 

function App() {
    //const nonce = new Buffer(uuidv4()).toString('base64');
    /*const cache = createCache({
        key: 'my-prefix-key',
        nonce: nonce,
        prepend: true,
      });
    */
    return (
        //<CacheProvider value={cache}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path={"/category/:name"} element={<Category/>}></Route>
                    <Route path={"/user/:userId"} element={<User/>}></Route>
                    <Route path={'/savings'} element={<Savings/>}></Route>
                    <Route path={'/test'} element={<Test/>}></Route>
                    <Route path={'/admin'} element={<Admin/>}></Route>
                </Route>
                <Route path={'/login'} element={<Login/>}></Route>
                <Route path={'*'} element={<NotFound/>}></Route>
            </Routes>
        //</CacheProvider>   
    );
}

export default App;



