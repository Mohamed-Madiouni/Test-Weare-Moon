import { combineReducers } from "redux";
import productReducer from "./product";
import errorReducer from "./error";
export default combineReducers({
  products: productReducer,
  errors: errorReducer,
});