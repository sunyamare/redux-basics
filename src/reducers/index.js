import countReducer from "./counter";
import loginReducer from "./isLoggedIn";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  count: countReducer,
  isLoggedIn: loginReducer
});
export default allReducers;
