import * as actionTypes from "../constants/auth"
import jwtDecode from "jwt-decode"

const initialState = {
    accessToken: null,
    is_authenticated: false,
    message:"",
    is_loading:false,
    firstname: null,
    lastname: null,
    email: null,
    userId: null,
    user_role: null,
    error: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_UP_REQUEST:
        case actionTypes.SIGN_IN_REQUEST:
        case actionTypes.USER_VERIFY_REQUEST:
        case actionTypes.USER_UPDATE_ROLE_REQUEST:
            return {
                ...state,
                is_loading:true,
            }
        case actionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                is_loading: false,
                message:action.payload.message
            }
        case actionTypes.SIGN_IN_SUCCESS:
        case actionTypes.USER_VERIFY_SUCCESS:
        case actionTypes.USER_LOADED_SUCCESSFULL:
        case actionTypes.USER_UPDATE_ROLE_SUCCESS:
            if (action.payload.accessToken) {          
                const user = jwtDecode(action.payload.accessToken)
                return {
                    ...state,
                    is_loading: false,
                    is_authenticated: true,
                    error: null,
                    accessToken: action.payload.accessToken,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    userId: user._id,
                    email: user.email,
                    user_role: user.user_role,                      
                }
            } else {
                return state;
            }
        case actionTypes.SIGN_IN_FAIL:
        case actionTypes.SIGN_UP_FAIL:
        case actionTypes.USER_VERIFY_FAILED:
        case actionTypes.USER_UPDATE_ROLE_FAILED:
            return {
                ...state,
                is_loading:false,
                error:action.payload
            }
        case actionTypes.LOG_OUT_SUCCESS:
            return {
                accessToken: null,
                is_authenticated: false,
                is_loading:false,
                firstname: null,
                lastname: null,
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