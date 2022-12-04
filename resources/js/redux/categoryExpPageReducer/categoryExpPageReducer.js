import * as types from "../actionTypes";

const initialState = {
    categoryExpPage: [],
    loading: false,
    error: null
}

export const categoryExpPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CATEGORYEXP_PAGE_LOAD_START:
         return {
            ...state,
            loading: true
         }
        case types.CATEGORYEXP_PAGE_LOAD_SUCCESS:
            return {
                ...state,
                categoryExpPage: action.payload,
                loading: false
            }
        case types.CATEGORYEXP_PAGE_LOAD_ERROR:
                return {
                ...state,
                error: action.payload,
                loading: false
                }
        default:
            return state
    }
}
