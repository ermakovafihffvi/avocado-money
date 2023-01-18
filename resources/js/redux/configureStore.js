import {applyMiddleware, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";
import {categoryExpReducer} from "./caregoryExpReducer/categoryExpReducer";
import {testReducer} from "./testReducer/testReducer";
import {savingsReducer} from "./savingsReducer/savingsReducer";
import { homeReducer } from "./homeReducer/homeReducer";
import { categorySavReducer } from "./categorySavReducer/categoryExpReducer";
import { categoryExpPageReducer } from "./categoryExpPageReducer/categoryExpPageReducer";
import { userPageReducer } from "./userPageReducer/userPageReducer";
import { userReducer } from "./userReducer/userReducer";
import { adminPageReducer } from "./adminPageReducer/adminPageReducer";
import { loginReducer } from "./loginReducer/loginReducer";
import axios from 'axios';

const reducer = combineReducers({
    categoryExp: categoryExpReducer,
    savings: savingsReducer,
    home: homeReducer,
    categorySav: categorySavReducer,
    categoryExpPage: categoryExpPageReducer,
    userPage: userPageReducer,
    userInfo: userReducer,
    adminPage: adminPageReducer,
    login: loginReducer,
    test: testReducer
})
const checkLogin = store => next => async action => {
    await axios.post(`http://${window.location.hostname}/api/loginCheck`, {})
    .then(({data}) => {
        console.log(data);
        if(data == 1){
            return next(action);
        } else {
            location.replace(`http://${window.location.hostname}/login`);
        }
        
    })
    .catch((e) => {
        location.replace(`http://${window.location.hostname}/login`);
    });
}
let middleware = store => next => action => {
    return next(action);
}

if(location.href != `http://${window.location.hostname}/login` 
    && location.href != `http://${window.location.hostname}/api/loginCheck`
){
    middleware = checkLogin;
}

export const store = createStore(reducer, applyMiddleware(thunk, middleware));