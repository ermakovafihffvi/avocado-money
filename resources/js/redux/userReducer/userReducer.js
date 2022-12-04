import * as types from "../actionTypes";

const initialState = {
    userData: [],
    loading: false,
    error: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_INFO_START:
         return {
            ...state,
            loading: true
         }
        case types.USER_INFO_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                loading: false
            }
        case types.USER_INFO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}