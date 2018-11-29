import userReduceer from "../../features/auth/store/reducer";
import userProfileReducer from "../../features/profile/store/reducer";
import billingReducer from "../../features/billing/store/reducer";

import { combineReducers } from "redux";
export default combineReducers({
  user: userReduceer,
  randomUser: userProfileReducer,
  billing: billingReducer
});
