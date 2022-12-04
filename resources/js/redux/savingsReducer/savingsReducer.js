import * as types from "../actionTypes";

const initialState = {
    savings: [],
    loading: false,
    error: null
}

export const savingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVINGS_LOAD_START:
         return {
            ...state,
            loading: true
         }
        case types.SAVINGS_LOAD_SUCCESS:
            return {
                ...state,
                savings: action.payload,
                loading: false
            }
        case types.SAVINGS_LOAD_ERROR:
                return {
                ...state,
                error: action.payload,
                loading: true
                }
        default:
            return state
    }
}