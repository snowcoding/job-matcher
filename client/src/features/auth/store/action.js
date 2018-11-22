// import all action types
import * as action from "./actionTypes";
import { addErrorHandler } from "./error";
import axios from "axios";
let URL =
	process.env.URL || "https://django-deploy-heroku-backend.herokuapp.com";

URL = "https://jobmatcher-api-prod.herokuapp.com";

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
export const loginOut = () => ({
	type: action.LOGOUT__USER
});
export const signUpUser = data => {
	return function(dispatch) {
		dispatch({ type: action.FETCHING });
		axios
			.post(`${URL}/api/v1/signup`, data)
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
		data = {
			...data,
			grant_type: "password",
			client_id: "1cbDYVshiDGjrUV8j4BYm37IGsNHRsCtPsmz77hl",
			client_secret: "3pJgSt6jvxQzWWCcCyeg0yzXL8HUcc5BHmj5ycBxoxQxR5t59Btq1XwGzS2pvS2nvxX8gOGUMYT6I25ntyipjEy8QWpMx9gGNrZv7MP3JycypnffHCSadpTgApeBsy7D",
		}
		axios
			.post(`http://localhost:8000/api/v1/o/token/`, data)
			.then(result => {
				localStorage.setItem("token", result.data.access_token);
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

export const updateUser = (id, data) => {
	return function(dispatch) {
		dispatch({ type: action.FETCHING });

		axios
			.put(`${URL}/api/v1/users/${id}`, data)
			.then(result => {
				localStorage.removeItem("jwt", "id");

				localStorage.setItem("jwt", result.data.token);
				localStorage.setItem("id", result.data.id);
				dispatch(updateUserHandler(result.data));
			})
			.catch(error => {
				console.log("errorr", error);
				dispatch(addErrorHandler(error.response.data));
			});
	};
};
export const deleteUser = id => {
	return function(dispatch) {
		dispatch({ type: action.FETCHING });

		axios
			.delete(`${URL}/api/v1/users/${id}`)
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
