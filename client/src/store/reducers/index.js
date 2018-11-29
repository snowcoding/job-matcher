import userReduceer from "../../features/auth/store/reducer";
import userProfileReducer from "../../features/profile/store/reducer";
import matchesReducer from "../../features/matches/store/reducer";
import { combineReducers } from "redux";
export default combineReducers({
  user: userReduceer,
  randomUser: userProfileReducer,
  matches: matchesReducer
});
