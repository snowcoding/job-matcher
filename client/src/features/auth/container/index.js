import React, { Component } from "react";
import { Route } from "react-router-dom";
import Signup from "./signup";
import Signin from "./signin";

class Auth extends Component {
	render() {
		return (
			<div>
				<Route path="/auth/signup" component={Signup} />

				<Route path="auth/signin/" component={Signin} />
			</div>
		);
	}
}

export default Auth;
