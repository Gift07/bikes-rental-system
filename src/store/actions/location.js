import * as constants from "../constants/location"
import axiosInstance from "../../axios"

export const createLocation = (body) => async (dispatch) => {
    try {
        dispatch({
            type:constants.LOCATION_CREATE_REQUEST
        })
        const { data } = await axiosInstance.post('/location', body)
        dispatch({
            type: constants.LOCATION_CREATE_SUCCESSFUL,
            payload:data,
        })
    } catch (error) {
        dispatch({
            type: constants.LOCATION_CREATE_FAIL,
            payload:error
        })
    }
}

export const fetchLocation = () => async (dispatch) => {
    try {
        dispatch({
            type:constants.LOCATIONS_FETCHING_REQUEST
        })
        const { data } = await axiosInstance.get('/location')
        dispatch({
            type: constants.LOCATIONS_FETCHING_SUCCESSFUL,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: constants.LOCATIONS_FETCHING_FAIL,
            payload:error
        })
    }
}

export const fetchLocationId = (id) => async (dispatch) => {
    console.log(id)
    try {
        dispatch({
            type:constants.LOCATION_FETCHING_REQUEST
        })
        const { data } = await axiosInstance.get(`/location/${id}`)
        dispatch({
            type: constants.LOCATION_FETCHING_SUCCESSFUL,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: constants.LOCATION_FETCHING_FAIL,
            payload:error
        })
    }
}