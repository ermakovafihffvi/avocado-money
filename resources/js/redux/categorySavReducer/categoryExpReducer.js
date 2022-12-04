import * as types from "../actionTypes";

const initialState = {
    categorySav: [],
    loading: false,
    error: null
}

export const categorySavReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CATEGORYSAV_LOAD_START:
         return {
            ...state,
            loading: true
         }
        case types.CATEGORYSAV_LOAD_SUCCESS:
            return {
                ...state,
                categorySav: action.payload,
                loading: false
            }
        case types.CATEGORYSAV_LOAD_ERROR:
                return {
                ...state,
                error: action.payload,
                loading: false
                }
        default:
            return state
    }
}
