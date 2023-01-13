import axios from 'axios';
import * as types from '../actionTypes';

export const loginStart = () => ({
    type: types.LOGIN_START,
})

export const loginSuccess = (data) => ({
    type: types.LOGIN_SUCCESS,
    payload: data
})

export const loginError = (err) => ({
    type: types.LOGIN_ERROR,
    payload: err
});


export const loginInitiate = () => {
    return async (dispatch) => {
        dispatch(loginStart())
        await axios.get(`http://${window.location.hostname}/api/login`)
        .then(({data}) => {
            dispatch(loginSuccess(data));
        })
        .catch((e) => dispatch(loginError(e.message)));

    }
}

