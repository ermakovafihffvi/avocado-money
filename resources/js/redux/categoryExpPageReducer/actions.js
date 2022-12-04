import * as types from '../actionTypes';


export const categoryExpPageStart = () => ({
    type: types.CATEGORYEXP_PAGE_LOAD_START,
})

export const categoryExpPageSuccess = (data) => ({
    type: types.CATEGORYEXP_PAGE_LOAD_SUCCESS,
    payload: data
})

export const categoryExpPageError = (err) => ({
    type: types.CATEGORYEXP_PAGE_LOAD_ERROR,
    payload: err
});


export const categoryExpPageInitiate = (categoryStr) => {
    return async (dispatch) => {
        dispatch(categoryExpPageStart())
        await axios.get(`http://laravelreact/api/category/` + categoryStr)
        .then(({data}) => {
            dispatch(categoryExpPageSuccess(data));
        })
        .catch((e) => dispatch(categoryExpPageError(e.message)));

    }
}
