import axios from 'axios';
import * as types from '../actionTypes';

export const userStart = () => ({
    type: types.USER_START,
})

export const userSuccess = (data) => ({
    type: types.USER_SUCCESS,
    payload: data
})

export const userError = (data) => ({
    type: types.USER_ERROR,
    payload: data
})

export const userPostSuccess = (data) => ({
    type: types.USER_POST_SUCCESS
})

export const userPageInitiate = (userId) => {
    return async (dispatch) => {
        dispatch(userStart());
        await axios.get(`http://${window.location.hostname}/api/user/` + userId)
        .then(({data}) => {
            dispatch(userSuccess(data));
        })
        .catch((e) => dispatch(userError(e.message)));

    }
}

export const userPagePost = (data) => {
    let usreId = data.user_id;
    let url = ``;
    if(data.money_type == "expenses"){
        url = `http://${window.location.hostname}/api/user/expenses/post`;
    } else if (data.money_type == "incomes") {
        url = `http://${window.location.hostname}/api/user/income/post`;
    }

    return async (dispatch) => {
        dispatch(userStart());
        await axios.post(url, data)
        .then(({data}) => {
            //console.log(data);
            dispatch(userPostSuccess());
        })
        .catch((e) => dispatch(userError(e.message)));
    }
}

export const userPageUpdate = (data) => {
    let url = ``;
    if(data.money_type == "expenses"){
        url = `http://${window.location.hostname}/api/user/expenses/update`;
    } else if (data.money_type == "incomes") {
        url = `http://${window.location.hostname}/api/user/income/update`;
    }

    return async (dispatch) => {
        dispatch(userStart());
        await axios.post(url, data)
        .then(({data}) => {
            dispatch(userPostSuccess());
        })
        .catch((e) => dispatch(userError(e.message)));
    }
}

export const userPageDelete = (data) => {
    let url = ``;
    if(data.money_type == "expenses"){
        url = `http://${window.location.hostname}/api/user/expenses/delete`;
    } else if (data.money_type == "incomes") {
        url = `http://${window.location.hostname}/api/user/income/delete`;
    }

    return async (dispatch) => {
        dispatch(userStart());
        await axios.post(url, data)
        .then(({data}) => {
            dispatch(userPostSuccess());
        })
        .catch((e) => dispatch(userError(e.message)));
    }
}