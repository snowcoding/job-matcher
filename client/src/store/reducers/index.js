import userReduceer from "../../features/auth/store/reducer";
import matchesReducer from "../../features/matches/store/reducer";
import { combineReducers } from "redux";
export default combineReducers({
  user: userReduceer,
  matches: matchesReducer
});
