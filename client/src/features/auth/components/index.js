import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Signup from './signup';
import Signin from './signin';

class Auth extends Component {
	render() {
		return (
			<React.Fragment>
				<Route path="/auth/signup" component={Signup}>
					Sign-Up
				</Route>
				<Route path="/auth/signin" component={Signin}>
					Sign-In
				</Route>
			</React.Fragment>
		);
	}
}

export default Auth;
