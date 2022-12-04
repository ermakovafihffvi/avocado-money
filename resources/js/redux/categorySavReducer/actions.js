import * as types from '../actionTypes';


export const categorySavStart = () => ({
    type: types.CATEGORYSAV_LOAD_START,
})

export const categorySavSuccess = (data) => ({
    type: types.CATEGORYSAV_LOAD_SUCCESS,
    payload: data
})

export const categorySavError = (err) => ({
    type: types.CATEGORYSAV_LOAD_ERROR,
    payload: err
});


export const categorySavInitiate = () => {
    return async (dispatch) => {
        dispatch(categorySavStart())
        await axios.get(`http://laravelreact/api/category_sav`)
        .then(({data}) => {
            dispatch(categorySavSuccess(data));
        })
        .catch((e) => dispatch(categorySavError(e.message)));

    }
}
