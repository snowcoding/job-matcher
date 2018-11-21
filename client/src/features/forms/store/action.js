import * as actionType from "./actionType";
import axios from "axios";
let url = "https://jobmatcher-api-stage.herokuapp.com";
url = 'http://127.0.0.1:8000';
axios.defaults.headers.common['Authorization'] = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTc0MzEwNTMyLCJqdGkiOiJhMDg1M2I4Zjc4NTg0MmEyYjNmNGIxYThiNWIwMDc0YSIsInVzZXJfaWQiOiJlcHJtcjIxb3pqIn0.rvbuULGYnQvqwZhFl11Qv8s4HGaKsEM7ZeHFsIodKbs';



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
