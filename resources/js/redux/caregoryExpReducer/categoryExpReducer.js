import * as types from "../actionTypes";

const initialState = {
    categoryExp: [],
    loading: false,
    error: null
}

export const categoryExpReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CATEGORYEXP_LOAD_START:
         return {
            ...state,
            loading: true
         }
        case types.CATEGORYEXP_LOAD_SUCCESS:
            return {
                ...state,
                categoryExp: action.payload,
                loading: false
            }
        case types.CATEGORYEXP_LOAD_ERROR:
                return {
                ...state,
                error: action.payload,
                loading: false
                }
        default:
            return state
    }
}
