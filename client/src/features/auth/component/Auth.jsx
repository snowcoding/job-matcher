import React from "react";
import { Route } from "react-router-dom";
import SignIn from "../container/SignIn";
import SignUp from "../container/SignUp";

const Auth = () => {
	return (
		<div>
			<Route path="/auth/login" component={SignUp} />

			<Route path="/auth/signin" component={SignIn} />
		</div>
	);
};

export default Auth;
