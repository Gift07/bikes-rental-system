import * as constants from "../constants/location"
import axiosInstance from "../../axios"

export const createLocation = (body) => async (dispatch) => {
    try {
        dispatch({
            type:constants.LOCATION_CREATE_REQUEST
        })
        const { data } = await axiosInstance.post('location', body)
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
        const { data } = await axiosInstance.get('location')
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

export const fetchApproveLocation = () => async (dispatch) => {
    console.log("here")
    try {
        dispatch({
            type:constants.LOCATIONS_APPROVE_FETCHING_REQUEST
        })
        const { data } = await axiosInstance.get('location/approve/location')
        dispatch({
            type: constants.LOCATIONS_APPROVE_FETCHING_SUCCESSFUL,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: constants.LOCATIONS_APPROVE_FETCHING_FAIL,
            payload:error
        })
    }
}

export const fetchLocationId = (id) => async (dispatch) => {
    try {
        dispatch({
            type:constants.LOCATION_FETCHING_REQUEST
        })
        const { data } = await axiosInstance.get(`location/${id}`)
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

export const approve = (id) => async (dispatch) => {
    try {
       dispatch({
        type: constants.LOCATION_APPROVAL_REQUEST
       }) 
       const {data} = await axiosInstance.patch('location/approve', {locationId:id})
       dispatch({
        type:constants.LOCATION_APPROVAL_SUCCESSFUL,
        payload:data
       })
    } catch (error) {
        dispatch({
            type:constants.LOCATION_APPROVAL_FAIL,
            payload:error
        })
    }
}

export const dissaprove = (id) => async (dispatch) => {
    try {
       dispatch({
        type: constants.LOCATION_DISSAPPROVAL_REQUEST
       }) 
       const {data} = await axiosInstance.delete(`location/disapprove/${id}`)
       dispatch({
        type:constants.LOCATION_DISSAPPROVAL_SUCCESSFUL,
        payload:data
       })
    } catch (error) {
        dispatch({
            type:constants.LOCATION_DISSAPPROVAL_FAIL,
            payload:error
        })
    }
}

export const deleteLocation = (id) => async (dispatch) => {
    try {
       dispatch({
        type: constants.LOCATION_DELETE_REQUEST
       }) 
       const {data} = await axiosInstance.delete(`location/${id}`)
       dispatch({
        type:constants.LOCATION_DELETE_SUCCESSFUL,
        payload:data
       })
    } catch (error) {
        dispatch({
            type:constants.LOCATION_DELETE_FAIL,
            payload:error
        })
    }
}