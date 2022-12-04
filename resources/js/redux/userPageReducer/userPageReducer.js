import * as types from "../actionTypes";

const initialState = {
    userPageData: [],
    loading: false,
    error: false
}

export const userPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_START:
         return {
            ...state,
            loading: true
         }
        case types.USER_SUCCESS:
            return {
                ...state,
                userPageData: action.payload,
                loading: false
            }
        case types.USER_POST_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case types.USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}