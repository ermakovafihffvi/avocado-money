import * as types from "../actionTypes";

const initialState = {
    adminPageData: [],
    loading: false,
    error: null
}

export const adminPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADMIN_PAGE_START:
        case types.ADMIN_PAGE_CONFIRM_SAV_SUM_START:
        case types.ADMIN_PAGE_CONFIRM_DEL_SAV_START:
            return {
                ...state,
                loading: true
            }
        case types.ADMIN_PAGE_SUCCESS:
            return {
                ...state,
                adminPageData: action.payload,
                loading: false
            }
        case types.ADMIN_PAGE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case types.ADMIN_PAGE_CONFIRM_SAV_SUM_SUCCESS:
        case types.ADMIN_PAGE_CONFIRM_DEL_SAV_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case types.ADMIN_PAGE_CONFIRM_SAV_SUM_ERROR:
        case types.ADMIN_PAGE_CONFIRM_DEL_SAV_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}