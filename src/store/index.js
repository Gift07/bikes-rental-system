import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import bikesReducer from './reducers/bikes';
import locationReducer from "./reducers/location";

const reducer = combineReducers({
    auth: authReducer,
    location: locationReducer,
    bikes:bikesReducer,
})

export default reducer