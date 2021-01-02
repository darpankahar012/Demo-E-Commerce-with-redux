import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducers from "./productReducers";
import cartReducer from "./cartReducer";
// import error from "./error";

export default combineReducers({
    userReducer,
    productReducers,
    cartReducer,
    // error,
});