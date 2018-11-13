import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";

const Landing = props => {
	return (
		<div className="landing">
			<Jumbotron>
				<h1 className="display-3">Job Matcher</h1>
				<p className="lead">
					This is a simple landing, a simple Jumbotron-style component
					for calling extra attention to featured content or
					information.
				</p>
				<hr className="my-2" />
				<p>
					It uses utility classes for typography and spacing to space
					content out within the larger container.
				</p>

				<Link to="auth/login">Sign in</Link>
				<br />
				<Link to="auth/signup">Sign up</Link>
			</Jumbotron>
		</div>
	);
};

export default Landing;
