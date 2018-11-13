import React from "react";
import { Route } from "react-router-dom";
import SignIn from "../container/SignIn";
import Signup from "../container/SignUp";

const Auth = () => {
	return (
		<div>
			<Route path="/auth/login" component={Signup} />

			<Route path="/auth/signin" component={Signin} />
		</div>
	);
};

export default Auth;
