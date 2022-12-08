import axios from 'axios';
import * as types from '../actionTypes';

export const testStart = () => ({
    type: types.TEST_START,
})

export const testSuccess = (data) => ({
    type: types.TEST_SUCCESS,
    payload: data
})

export const testInitiate = () => {
    return async (dispatch) => {
        dispatch(testStart())
        await axios.get(`http://${window.location.hostname}/api/test`)
        .then(({data}) => {
            dispatch(testSuccess(data));
        })
        .catch((e) => console.log(e));

    }
}

export const testPostSuccess = (data) => ({
    type: types.TEST_POST_SUCCESS,
    payload: data
})

export const testPost = (data) => {
    return async (dispatch) => {
        await axios.post(`http://${window.location.hostname}/api/test/post`, data)
        .then(({data}) => {
            dispatch(testPostSuccess(data));
        })
    }
}

export const testUpdate = (data) => {
    return async (dispatch) => {
        await axios.post(`http://${window.location.hostname}/api/test/update`, data)
        .then(({data}) => {
            dispatch(testPostSuccess(data));
        })
    }
}

export const testDelete = (data) => {
    return async (dispatch) => {
        await axios.post(`http://${window.location.hostname}/api/test/delete`, data)
        .then(({data}) => {
            dispatch(testPostSuccess(data));
        })
    }
}