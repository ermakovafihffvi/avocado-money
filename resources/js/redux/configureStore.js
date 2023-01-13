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

const reducer = combineReducers({
    categoryExp: categoryExpReducer,
    savings: savingsReducer,
    home: homeReducer,
    categorySav: categorySavReducer,
    categoryExpPage: categoryExpPageReducer,
    userPage: userPageReducer,
    userInfo: userReducer,
    adminPage: adminPageReducer,
    test: testReducer
})

export const store = createStore(reducer, applyMiddleware(thunk));