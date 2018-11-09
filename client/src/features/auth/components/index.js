import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import Signup from './signup';
import Signin from './signin';

class Auth extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Route path="/auth/signup" component={Signup}>
						Sign-Up
					</Route>
					<Route path="/auth/signin" component={Signin}>
						Sign-In
					</Route>
				</Row>
			</Container>
		);
	}
}

export default Auth;
