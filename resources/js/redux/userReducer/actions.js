import * as types from '../actionTypes';


export const userStart = () => ({
    type: types.USER_INFO_START,
})

export const userSuccess = (data) => ({
    type: types.USER_INFO_SUCCESS,
    payload: data
})

export const userError = (err) => ({
    type: types.USER_INFO_ERROR,
    payload: err
});


export const userInitiate = () => {
    return async (dispatch) => {
        dispatch(userStart())
        await axios.get(`http://laravelreact/api/userinfo`)
        .then(({data}) => {
            dispatch(userSuccess(data));
        })
        .catch((e) => dispatch(userError(e.message)));

    }
}