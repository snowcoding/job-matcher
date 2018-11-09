import React from "react";
import { Route } from "react-router-dom";
import Signup from "../container/signup";
import Signin from "../container/signin";

const Auth = () => {
	return (
		<div>
			<Route path="/auth/signup" component={Signup} />

			<Route path="auth/signin/" component={Signin} />
		</div>
	);
};

export default Auth;
