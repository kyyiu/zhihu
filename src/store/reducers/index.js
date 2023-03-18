import { combineReducers } from "redux";
import baseReducer from "./base";
import storeReducer from "./store";

export default combineReducers({
    base: baseReducer,
    store: storeReducer
})