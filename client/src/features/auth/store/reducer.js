import * as actionTypes from "./actionTypes";
import * as actionType from "../../forms/store/actionType";
import Api from '../../../api';
const initialState = {
	fetching: false,
	FETCHING_GET_PROFILE: true,
	authenticatoin_succeed: false,
	is_seeker: null,
	currentUser: null,
	token: null,
	error: null
};

function userReduceer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCHING:
			return {
				...state,
				fetching: true
			};
		case actionTypes.SIGNUP__USER:
			localStorage.setItem("access_token", action.data.access_token);
			Api.defaults.headers.common["Authorization"] = `Bearer ${action.data.access_token}`;
			return {
				...state,
				error: null,
				authenticatoin_succeed: true,
 				currentUser: {...action.data.profile},
				fetching: false,
				authenticatoin_succeed: true,
				token: action.data.access_token,
				currentUser: action.data.profile,

			};
		case actionTypes.LOGIN__USER:
			localStorage.setItem("access_token", action.data.access_token);
			Api.defaults.headers.common["Authorization"] = `Bearer ${action.data.access_token}`;
			return {
				...state,
				error: null,
				authenticatoin_succeed: true,

				currentUser: {...action.data.profile},
				fetching: false,
				token: action.data.access_token,
			};
		case actionTypes.LOGOUT__USER:
			localStorage.removeItem("access_token");
			return {
				...state,
				error: null,
				authenticatoin_succeed: false,
				fetching: false,
				currentUser: null
			};
		case actionTypes.DELETE__USER:
			return {
				...state,
				error: null,
				fetching: false,
				currentUser: null
			};
		case actionTypes.UPDATE__USER:
			return {
				...state,
				fetching: false,
				error: null,
				currentUser: action.currentUser
			};
		case actionType.FETCHING_GET_PROFILE:
			return {...state, FETCHING_GET_PROFILE: true}
		case actionType.GET_PROFILE:
			return {...state, FETCHING_GET_PROFILE: false, authenticatoin_succeed: true, currentUser: {...action.user}, is_seeker: action.user.is_seeker }
		case actionTypes.ADD__ERROR:
			return {
				...state,
				error: action.error.error,
				FETCHING_GET_PROFILE: false,
				fetching: false
			};
		case actionTypes.DELETE__ERROR:
			return {
				...state,
				is_seeker: null,
				currentUser: null,
				error: null,
				fetching: false,
				FETCHING_GET_PROFILE: false,
			};
		default:
			return state;
	}
}
export default userReduceer;
