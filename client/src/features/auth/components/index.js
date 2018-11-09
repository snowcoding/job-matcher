import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Signup from './signup';
import Signin from './signin';

class Auth extends Component {
	render() {
		return (
			<div>
				<Route path="/auth/signup" component={Signup}>
					Sign-Up
				</Route>
				<Route path="/auth/signin" component={Signin}>
					Sign-In
				</Route>
			</div>
		);
	}
}

export default Auth;
