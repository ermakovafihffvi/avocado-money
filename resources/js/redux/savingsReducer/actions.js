import * as types from '../actionTypes';


export const savingsStart = () => ({
    type: types.SAVINGS_LOAD_START,
})

export const savingsSuccess = (data) => ({
    type: types.SAVINGS_LOAD_SUCCESS,
    payload: data
})

export const savingsError = (err) => ({
    type: types.SAVINGS_LOAD_ERROR,
    payload: err
});


export const savingsInitiate = () => {
    return async (dispatch) => {
        dispatch(savingsStart())
        await axios.get(`http://laravelreact/api/savings`)
        .then(({data}) => {
            dispatch(savingsSuccess(data));
        })
        .catch((e) => dispatch(savingsError(e.message)));

    }
}