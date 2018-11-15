import * as actionTypes from "./actionTypes";
const initialState = {
	fetching: false,
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
			return {
				...state,
				error: null,
				fetching: false,
				authenticatoin_succeed: true,
				is_seeker: action.user.data["desired_title"] ? true : false,
				token: action.user.token,
				currentUser: { ...action.user.data }
			};
		case actionTypes.LOGIN__USER:
			return {
				...state,
				error: null,
				authenticatoin_succeed: true,
				fetching: false,
				currentUser: action.currentUser
			};
		case actionTypes.LOGOUT__USER:
			localStorage.removeItem("token");
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
		case actionTypes.GET__USERS:
			return {
				...state,
				fetching: false,
				error: null,
				users: action.users
			};
		case actionTypes.ADD__ERROR:
			return {
				...state,
				error: action.error.error,
				fetching: false
			};
		case actionTypes.DELETE__ERROR:
			return {
				...state,
				is_seeker: null,
				currentUser: null,
				error: null,
				fetching: false
			};
		default:
			return state;
	}
}
export default userReduceer;
