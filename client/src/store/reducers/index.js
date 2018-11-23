import userReduceer from "../../features/auth/store/reducer";
import userProfileReducer from "../../features/profile/store/reducer";

import { combineReducers } from "redux";
export default combineReducers({
	user: userReduceer,
	randomUser: userProfileReducer

});
