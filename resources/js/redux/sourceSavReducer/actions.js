import * as types from '../actionTypes';


export const sourceSavStart = () => ({
    type: types.SOURCESAV_LOAD_START,
})

export const sourceSavSuccess = (data) => ({
    type: types.SOURCESAV_LOAD_SUCCESS,
    payload: data
})

export const sourceSavError = (err) => ({
    type: types.SOURCESAV_LOAD_ERROR,
    payload: err
});


export const sourceSavInitiate = () => {
    return async (dispatch) => {
        dispatch(sourceSavStart())
        await axios.get(`http://${window.location.hostname}/api/source_sav`)
        .then(({data}) => {
            dispatch(sourceSavSuccess(data));
        })
        .catch((e) => dispatch(sourceSavError(e.message)));

    }
}
