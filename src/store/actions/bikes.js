import * as constants from "../constants/bikes"
import axiosInstance from "../../axios"

export const createBike = (body) => async (dispatch) => {
    try {
        dispatch({
            type:constants.BIKE_CREATE_REQUEST
        })
        const { data } = await axiosInstance.post('/bikes', body)
        dispatch({
            type: constants.BIKE_CREATE_SUCCESSFUL,
            payload:data,
        })
    } catch (error) {
        dispatch({
            type: constants.BIKE_CREATE_FAIL,
            payload:error
        })
    }
}

export const fetchBikes = () => async (dispatch) => {
    try {
        dispatch({
            type:constants.BIKES_FETCHING_REQUEST
        })
        const { data } = await axiosInstance.get('/bikes')
        dispatch({
            type: constants.BIKES_FETCHING_SUCCESSFUL,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: constants.BIKES_FETCHING_FAIL,
            payload:error
        })
    }
}

export const fetchBikeId = (id) => async (dispatch) => {
    try {
        dispatch({
            type:constants.BIKE_FETCHING_REQUEST
        })
        const { data } = await axiosInstance.get(`/bikes/${id}`)
        dispatch({
            type: constants.BIKE_FETCHING_SUCCESSFUL,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: constants.BIKE_FETCHING_FAIL,
            payload:error
        })
    }
}