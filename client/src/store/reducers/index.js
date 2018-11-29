import userReduceer from "../../features/auth/store/reducer";
import viewReducer from "../../features/view/store/reducer";

import { combineReducers } from "redux";
export default combineReducers({
  user: userReduceer,
  randomUser: viewReducer
});
