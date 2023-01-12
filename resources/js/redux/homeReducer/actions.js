import * as types from '../actionTypes';


export const homeStart = () => ({
    type: types.HOME_START,
})

export const homeSuccess = (data) => ({
    type: types.HOME_SUCCESS,
    payload: data
})

export const homeError = (err) => ({
    type: types.HOME_ERROR,
    payload: err
});


export const homeInitiate = () => {
    console.log("in home reducer");
    return async (dispatch) => {
        dispatch(homeStart())
        await axios.get(`http://${window.location.hostname}/api/home`)
        .then(({data}) => {
            dispatch(homeSuccess(data));
        })
        .catch((e) => dispatch(homeError(e.message)));

    }
}