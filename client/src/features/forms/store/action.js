import * as actionType from "./actionType";
import axios from "axios";
let url = "https://jobmatcher-api-stage.herokuapp.com"

axios.defaults.headers.common['Authorization'] = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTc0MzA1MDMyLCJqdGkiOiIyYmI4ZTc3NzlkZDE0Y2ZhYjY0ZDNkYzZhZjdkMTlkMCIsInVzZXJfaWQiOiJkamwxMWw2a3NtIn0.4hdSzQ3fAeqKDi-4Cplr5jhDVuN08kwUup5snN6-OHc';



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


export const updateProfileImg = data => dispatch => {
	dispatch({ type: actionType.FETCHING_UPDATE_PROFILE });
	axios
		.post(`${url}/api/v1/me`)
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
		.post(`${url}/api/v1/me`)
		.then(result => {
			dispatch(passwordUpdateHandler(result.data));
		})
		.catch(error => {
			error.response
				? dispatch(profileErrorHandler(error.response.data))
				: dispatch(profileErrorHandler(error));
		});
};
