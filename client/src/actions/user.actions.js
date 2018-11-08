import { userConstants } from '../constants';
import { userService } from '../ervices';
import { alertActions } from './';

export const userActions = {
	signin,
	logout,
};

function signin(username, password) {
	return dispatch => {
		dispatch(request({ username }));

		userService.login(username, password).then(
			user => {
				dispatch(success(user)).push('/');
			},
			error => {
				dispatch(failure(error.toString()));
				dispatch(alertActions.error(error.toString()));
			},
		);
	};

	function request(user) {
		return { type: userConstants.SIGNIN_REQUEST, user };
	}
	function success(user) {
		return { type: userConstants.SIGNIN_SUCCESS, user };
	}
	function failure(error) {
		return { type: userConstants.SIGNIN_FAILURE, error };
	}
}

function logout() {
	userService.logout();
	return { type: userConstants.LOGOUT };
}
