import * as actionType from "./actionType";
const intialState = {
	FETCHING_UPDATE_PROFILE: false
};
export default (reducer = (state = intialState, action) => {
	switch (action.type) {
		case actionType.FETCHING_UPDATE_PROFILE:
			return { ...state, FETCHING_UPDATE_PROFILE: true };
		case actionType.UPDATE_PROFILE:
			return { ...state, FETCHING_UPDATE_PROFILE: false };
		case actionType.UPDATE_PROFILE_IMG:
			return { ...state, FETCHING_UPDATE_PROFILE: false };
		case actionType.UPDATE_PROFILE_PASSWORD:
			return { ...state, FETCHING_UPDATE_PROFILE: false };
		case actionType.ERROR_UPDATE_PROFILE:
			return {
				...state,
				FETCHING_UPDATE_PROFILE: false,
				error: action.error
			};
		default:
			return { ...state };
	}
});
