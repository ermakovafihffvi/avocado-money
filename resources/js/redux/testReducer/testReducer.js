import * as types from "../actionTypes";

const initialState = {
    test: [],
    loading: false,
}

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TEST_START:
         return {
            ...state,
            loading: true
         }
        case types.TEST_SUCCESS:
            return {
                ...state,
                test: action.payload,
                loading: false
            }
        case types.TEST_POST_SUCCESS:
            return {
                ...state,
                test: action.payload,
                loading: false
            }
        default:
            return state
    }
}