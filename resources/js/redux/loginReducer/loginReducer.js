import * as types from "../actionTypes";

const initialState = {
    response: [],
    loading: false,
    error: null
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_START:
        case types.LOGOUT_START:
         return {
            ...state,
            loading: true
         }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                response: action.payload,
                loading: false
            }
        case types.LOGIN_ERROR:
        case types.LOGOUT_ERROR:
                return {
                ...state,
                error: action.payload,
                loading: false
                }
        default:
            return state
    }
}