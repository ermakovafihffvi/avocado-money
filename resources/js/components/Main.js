import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "../redux/configureStore";

ReactDOM.render(
    //<ThemeProvider theme={theme}>
        //<Provider store={store}>
            <BrowserRouter>
                <Provider store={store}>
                    <React.StrictMode>
                        <App />
                    </React.StrictMode>
                </Provider>
            </BrowserRouter>
    //</Provider>
    //</ThemeProvider>
    ,document.getElementById('root')
);