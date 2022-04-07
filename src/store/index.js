import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import bikesReducer from './reducers/bikes';
import locationReducer from "./reducers/location";
import  mapReducer  from "./reducers/map";

const reducer = combineReducers({
    auth: authReducer,
    location: locationReducer,
    bikes: bikesReducer,
    map:mapReducer
    
})

export default reducer