import * as types from "../actionTypes";

const initialState = {
    homeData: [],
    loading: false,
    error: null
}

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.HOME_START:
         return {
            ...state,
            loading: true
         }
        case types.HOME_SUCCESS:
            return {
                ...state,
                homeData: action.payload,
                loading: false
            }
        case types.HOME_ERROR:
                return {
                ...state,
                error: action.payload,
                loading: false
                }
        default:
            return state
    }
}