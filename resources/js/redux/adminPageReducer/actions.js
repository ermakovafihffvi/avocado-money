import axios from 'axios';
import * as types from '../actionTypes';


export const adminPageStart = () => ({
    type: types.ADMIN_PAGE_START,
})

export const adminPageSuccess = (data) => ({
    type: types.ADMIN_PAGE_SUCCESS,
    payload: data
})

export const adminPageError = (err) => ({
    type: types.ADMIN_PAGE_ERROR,
    payload: err
});

export const confirmSavingSumStart = () => ({
    type: types.ADMIN_PAGE_CONFIRM_SAV_SUM_START
})

export const confirmSavingSumSuccess = (data) => ({
    type: types.ADMIN_PAGE_CONFIRM_SAV_SUM_SUCCESS,
})

export const confirmSavingSumError = (err) => ({
    type: types.ADMIN_PAGE_CONFIRM_SAV_SUM_ERROR,
    payload: err
})

export const confirmDeleteSavingStart = () => ({
    type: types.ADMIN_PAGE_CONFIRM_DEL_SAV_START
})

export const confirmDeleteSavingSuccess = (data) => ({
    type: types.ADMIN_PAGE_CONFIRM_DEL_SAV_SUCCESS,
})

export const confirmDeleteSavingError = (err) => ({
    type: types.ADMIN_PAGE_CONFIRM_DEL_SAV_ERROR,
    payload: err
})

export const adminPageInitiate = () => {
    return async (dispatch) => {
        dispatch(adminPageStart())
        await axios.get(`http://${window.location.hostname}/api/admin/`)
        .then(({data}) => {
            dispatch(adminPageSuccess(data));
        })
        .catch((e) => dispatch(adminPageError(e.message)));

    }
}

export const adminPageConfirmSaving = (object) => {
    return async (dispatch) => {
        dispatch(confirmSavingSumStart())
        await axios.post(`http://${window.location.hostname}/api/admin/confirm_saving_sum`, object)
        .then(({data}) => {
            dispatch(confirmSavingSumSuccess(data));
        })
        .catch((e) => dispatch(confirmSavingSumError(e.message)));
    }
}

export const adminPageConfirmDeleting = (object) => {
    return async (dispatch) => {
        dispatch(confirmDeleteSavingStart())
        await axios.post(`http://${window.location.hostname}/api/admin/confirm_delete_saving`, object)
        .then(({data}) => {
            dispatch(confirmDeleteSavingSuccess(data));
        })
        .catch((e) => dispatch(confirmDeleteSavingError(e.message)));
    }
}