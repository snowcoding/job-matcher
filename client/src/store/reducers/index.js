import userReduceer from "../../features/auth/store/reducer";
import billingReducer from "../../features/billing/store/reducer";
import matchesReducer from "../../features/matches/store/reducer";
import viewReducer from "../../features/view/store/reducer";
import { combineReducers } from "redux";

export default combineReducers({
  user: userReduceer,
  randomUser: viewReducer,
  matches: matchesReducer,
  billing: billingReducer
});
