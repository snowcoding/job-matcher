import * as actionType from "./actionType";
import axios from "axios";
let URL = "backend";
const profileUpdateHandler = user => ({
	type: actionType.UPDATE_PROFILE,
	user
});
const userImgUpdateHandler = img => ({
	type: actionType.UPDATE_PROFILE_IMG,
	img
});
const passwordUpdateHandler = password => ({
	type: actionType.UPDATE_PROFILE_PASSWORD,
	password
});
const profileErrorHandler = error => ({
	type: actionType.ERROR_UPDATE_PROFILE,
	error
});

export const updateProfile = data => dispatch => {
	dispatch({ type: actionType.FETCHING_UPDATE_PROFILE });
	axios
		.post(`${URL}/api/v1/me`)
		.then(result => {
			dispatch(profileUpdateHandler(result.data));
		})
		.catch(error => {
			error.response
				? dispatch(profileErrorHandler(error.response.data))
				: dispatch(profileErrorHandler(error));
		});
};
export const updateProfileImg = data => dispatch => {
	dispatch({ type: actionType.FETCHING_UPDATE_PROFILE });
	axios
		.post(`${URL}/api/v1/me`)
		.then(result => {
			dispatch(userImgUpdateHandler(result.data));
		})
		.catch(error => {
			error.response
				? dispatch(profileErrorHandler(error.response.data))
				: dispatch(profileErrorHandler(error));
		});
};
export const updateProfilePassword = data => dispatch => {
	dispatch({ type: actionType.FETCHING_UPDATE_PROFILE });
	axios
		.post(`${URL}/api/v1/me`)
		.then(result => {
			dispatch(passwordUpdateHandler(result.data));
		})
		.catch(error => {
			error.response
				? dispatch(profileErrorHandler(error.response.data))
				: dispatch(profileErrorHandler(error));
		});
};
