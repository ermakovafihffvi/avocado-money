import axios from 'axios';
import * as types from '../actionTypes';

export const loginStart = () => ({
    type: types.LOGIN_START
})

export const logoutStart = () => ({
    type: types.LOGOUT_START
})

export const loginSuccess = (data) => ({
    type: types.LOGIN_SUCCESS,
    payload: data
})

export const loginError = (err) => ({
    type: types.LOGIN_ERROR,
    payload: err
});

export const logoutError = (err) => ({
    type: types.LOGOUT_ERROR,
    payload: err
});


export const loginInitiate = (data) => {
    return async (dispatch) => {
        dispatch(loginStart());
        //let instance = axios.create({});
        //instance.defaults.headers['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
        await axios.post(`http://${window.location.hostname}/api/login`, data)
        .then(({data}) => {
            location.replace(`http://${window.location.hostname}`);
        })
        .catch((e) => {
            dispatch(loginError(e.response.data.message))
        });

    }
}

export const logoutInitiate = () => {
    return async (dispatch) => {
        dispatch(logoutStart());
        await axios.post(`http://${window.location.hostname}/api/logout`, {})
        .then(({data}) => {
            location.replace(`http://${window.location.hostname}/login`);
        })
        .catch((e) => dispatch(logoutError(e.message)));
    }
}

