import * as actionType from "./actionType";
import axios from "axios";
let url = "https://jobmatcher-api-stage.herokuapp.com"

axios.defaults.headers.common['Authorization'] = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTc0Mjc0NzM4LCJqdGkiOiIzOTM5MTliY2U1NWE0MmY1YTc5MGM5MDM4NmNmYzlhNSIsInVzZXJfaWQiOiI5d3dycWM5cHZrIn0.39RYgkEv6wdujwKB52rlljz4_Vwkq1tcW6u6VuIeLU8';



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
