import { combineReducers } from "redux";
import loginReducer from "../reducer/login.reducer";
import registerReducer from "../reducer/register.reducer";

export default combineReducers({
  loginReducer,
  registerReducer,
});
