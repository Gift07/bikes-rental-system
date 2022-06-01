import * as actionTypes from "../constants/auth"
import axiosInstance from "../../axios"

export const signIn = (body) => async(dispatch) => {
    try {
        dispatch({
            type: actionTypes.SIGN_IN_REQUEST,
            
        })
        const { data } = await axiosInstance.post('auth/sign-in', body)
        console.log(data)
        dispatch({
            type: actionTypes.SIGN_IN_SUCCESS,
            payload: data,
        })
        localStorage.setItem(
            "accessToken",data.accessToken
        );
    } catch (error) {
        dispatch({
            type: actionTypes.SIGN_IN_FAIL,
            payload:error
        })
    }
}

export const signUp = (body) => async (dispatch) => {
    console.log(body)
    try {
        dispatch({
            type: actionTypes.SIGN_UP_REQUEST,
            
        }) 
        const { data } = await axiosInstance.post("auth/sign-up", body)
        console.log(data)
        dispatch({
            type: actionTypes.SIGN_UP_SUCCESS,
            payload:data,
        })
    } catch (error) {
        dispatch({
            type: actionTypes.SIGN_UP_FAIL,
            payload:error
        })
    }
} 

// load user
export const loadUser = () => {
    return (dispatch) => {
        const accessToken = localStorage.getItem('accessToken')
        const data = {
            accessToken,
        }
      if (data) {
        dispatch({
          type: actionTypes.USER_LOADED_SUCCESSFULL,
          payload:data,
        });
      } else return null;
    };
};
// set staff
export const setStaff = (id) => {
    console.log(id)
    return async (dispatch) => {
        try {
            dispatch({
                type: actionTypes.USER_UPDATE_ROLE_REQUEST
            })
            const data = await axiosInstance.post('auth/set-staff',{userId:id})
            dispatch({
                type: actionTypes.USER_UPDATE_ROLE_SUCCESS,
                payload: data
            })
            if (data) {
             localStorage.clear()
            // setting the token to the locastorage
            localStorage.setItem(
                "accessToken",data.accessToken
            );
            localStorage.setItem(
                "refreshToken",data.refreshToken
            ); 
            }
            
        } catch (error) {
            dispatch({
                type: actionTypes.USER_UPDATE_ROLE_FAILED,
                payload: error
            })
        }
    }
}
  // LOG OUT
export const logOut = () => async (dispatch) => {
    dispatch({
      type: actionTypes.LOG_OUT_REQUEST,
    });
    localStorage.clear();
    dispatch({
      type: actionTypes.LOG_OUT_SUCCESS,
    });
  };