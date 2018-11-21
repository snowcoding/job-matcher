// import all action types
import * as action from "./actionTypes";
import { addErrorHandler } from "./error";
import axios from "axios";
import * as actionType from "../../forms/store/actionType";
let url = "https://jobmatcher-api-stage.herokuapp.com";
url = 'http://127.0.0.1:8000';
axios.defaults.headers.common['Authorization'] = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTc0MzEwNTMyLCJqdGkiOiJhMDg1M2I4Zjc4NTg0MmEyYjNmNGIxYThiNWIwMDc0YSIsInVzZXJfaWQiOiJlcHJtcjIxb3pqIn0.rvbuULGYnQvqwZhFl11Qv8s4HGaKsEM7ZeHFsIodKbs';


const signUpHandler = user => ({
	type: action.SIGNUP__USER,
	user
});
const loginHandler = currentUser => ({
	type: action.LOGIN__USER,
	currentUser
});
const updateUserHandler = currentUser => ({
	type: action.UPDATE__USER,
	currentUser
});

const deleteUserHandler = () => ({
	type: action.DELETE__USER
});

const getProfileHandler = user =>({
	type: actionType.GET_PROFILE,
	user
})
export const getProfile = () => dispatch =>{
	dispatch({ type: actionType.FETCHING_GET_PROFILE });
	axios
		.get(`${url}/api/v1/me`)
		.then(result => {
			console.log({result})
			dispatch(getProfileHandler (result.data));
		})
		.catch(error => {
			error.response
				? dispatch(addErrorHandler(error.response.data))
				: dispatch(addErrorHandler(error));
		});
}

export const loginOut = () => ({
	type: action.LOGOUT__USER
});
export const signUpUser = data => {
	return function(dispatch) {
		dispatch({ type: action.FETCHING });
		axios
			.post(`${url}/api/v1/signup`, data)
			.then(result => {
				dispatch(signUpHandler(result.data));
			})
			.catch(error => {
				console.log("errorr", { error });
				error.response
					? dispatch(addErrorHandler(error.response.data))
					: dispatch(addErrorHandler(error.message));
			});
	};
};

export const login = data => {
	return function(dispatch) {
		dispatch({ type: action.FETCHING });

		axios
			.post(`${url}/api/v1/signin`, data)
			.then(result => {
				localStorage.setItem("token", result.data.token);
				dispatch(loginHandler(result.data));
			})
			.catch(error => {
				console.log("errorr", { error });
				error.response
					? dispatch(addErrorHandler(error.response.data))
					: dispatch(addErrorHandler(error.message));
			});
	};
};

export const updateUser = (data, typeUser) => {
	return function(dispatch) {
		dispatch({ type: action.FETCHING });

		axios
			.patch(`${url}/api/v1/${typeUser}`, data)
			.then(result => {
				localStorage.removeItem("jwt", "id");

				localStorage.setItem("jwt", result.data.token);
				localStorage.setItem("id", result.data.id);
				dispatch(updateUserHandler(result.data));
				console.log({result})
			})
			.catch(error => {
				console.log("errorr", error.response.data);
				dispatch(addErrorHandler(error.response.data));
			});
	};
};
export const deleteUser = (userType) => {
	return function(dispatch) {
		dispatch({ type: action.FETCHING });

		axios
			.delete(`${url}/api/v1/${userType}`)
			.then(result => {
				localStorage.removeItem("jwt", "id");
				dispatch(deleteUserHandler());
			})
			.catch(error => {
				console.log("errorr", error);
				dispatch(addErrorHandler(error.response.data));
			});
	};
};
