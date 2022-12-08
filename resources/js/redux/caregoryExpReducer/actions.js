import * as types from '../actionTypes';


export const categoryExpStart = () => ({
    type: types.CATEGORYEXP_LOAD_START,
})

export const categoryExpSuccess = (data) => ({
    type: types.CATEGORYEXP_LOAD_SUCCESS,
    payload: data
})

export const categoryExpError = (err) => ({
    type: types.CATEGORYEXP_LOAD_ERROR,
    payload: err
});


export const categoryExpInitiate = () => {
    return async (dispatch) => {
        dispatch(categoryExpStart())
        await axios.get(`http://${window.location.hostname}/api/category_exp`)
        .then(({data}) => {
            dispatch(categoryExpSuccess(data));
        })
        .catch((e) => dispatch(categoryExpError(e.message)));

    }
}
