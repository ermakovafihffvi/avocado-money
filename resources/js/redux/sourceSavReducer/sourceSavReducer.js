import * as types from "../actionTypes";

const initialState = {
    sourceSav: [],
    loading: false,
    error: null
}

export const sourceSavReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SOURCESAV_LOAD_START:
         return {
            ...state,
            loading: true
         }
        case types.SOURCESAV_LOAD_SUCCESS:
            return {
                ...state,
                sourceSav: action.payload,
                loading: false
            }
        case types.SOURCESAV_LOAD_ERROR:
                return {
                ...state,
                error: action.payload,
                loading: false
                }
        default:
            return state
    }
}
