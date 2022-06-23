import axiosInstance from "../../axios"
import * as constants from "../constants/myrents"

export const createMyRent = (body) => async (dispatch) => {
    try {
        dispatch({
            type:constants.CREATE_MYRENT_REQUEST
        })
        const { data } = await axiosInstance.post("my-rents", body)
        dispatch({
            type: constants.CREATE_MYRENT_SUCCESS,
            payload:data,
        })
    } catch (error) {
        dispatch({
            type: constants.CREATE_MYRENT_FAIL,
            payload:error
        })
    }
}

export const fetchMyRents = () => async (dispatch) => {
    try {
        dispatch({
           type:constants.FETCH_MYRENT_REQUEST
        }) 
        const { data } = await axiosInstance.get('my-rents')
        dispatch({
            type: constants.FETCH_MYRENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: constants.FETCH_MYRENT_FAIL,
            payload: error
        })
    }
}

export const deleteMyRents = (body) => async (dispatch) => {
    try {
        const { data } = await axiosInstance.post('my-rents/delete',body)
        dispatch({
            type:"DELETE_MY_RENTS",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "DELETE_ERROR",
            payload: error
        })
    }
}
