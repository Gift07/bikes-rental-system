import * as actionTypes from "../constants/auth"
import jwtDecode from "jwt-decode"

const initialState = {
    accessToken: null,
    refreshToken: null,
    is_authenticated: false,
    is_loading:false,
    username: null,
    email: null,
    userId: null,
    user_role: null,
    error: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_UP_REQUEST:
        case actionTypes.SIGN_IN_REQUEST:
            return {
                ...state,
                is_loading:true,
            }
        case actionTypes.SIGN_IN_SUCCESS:
        case actionTypes.SIGN_UP_SUCCESS:
        case actionTypes.USER_LOADED_SUCCESSFULL:
            if (action.payload.accessToken) {          
                const user = jwtDecode(action.payload.accessToken)
                return {
                      ...state,
                      is_loading: false,
                      is_authenticated: true,
                      error: null,
                      accessToken: action.payload.accessToken,
                      refreshToken: action.payload.refreshToken,
                      username: user.user_name,
                      userId: user._id,
                      email: user.email,
                      user_role: user.user_role,                      
                }
            } else {
                return state;
            }
        case actionTypes.SIGN_IN_FAIL:
        case actionTypes.SIGN_UP_REQUEST:
            return {
                ...state,
                error:action.payload
            }
        case actionTypes.LOG_OUT_SUCCESS:
            return {
                accessToken: null,
                refreshToken: null,
                is_authenticated: false,
                is_loading:false,
                username: null,
                email: null,
                userId: null,
                user_role: null,
                error: null,  
            }
        default:
            return state
    }
}

export default authReducer