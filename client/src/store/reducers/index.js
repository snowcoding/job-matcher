import userReduceer from "../../features/auth/store/reducer";
import { combineReducers } from "redux";
export default combineReducers({
	user: userReduceer
});
