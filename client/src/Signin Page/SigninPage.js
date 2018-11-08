import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

class SigninPage extends React.Component {
	constructor(props) {
		super(props);

		// reset login status
		this.props.dispatch(userActions.logout());

		this.state = {
			username: '',
			password: '',
			submitted: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({ submitted: true });
		const { username, password } = this.state;
		const { dispatch } = this.props;
		if (username && password) {
			dispatch(userActions.signin(username, password));
		}
	}

	render() {
		const { loggingIn } = this.props;
		const { username, password, submitted } = this.state;
		return (
			<div className="signin-container">
				<h2>SignIn</h2>
				<form name="signin-form" onSubmit={this.handleSubmit}>
					<div className={submitted && !username ? ' has-error' : ''}>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							value={username}
							onChange={this.handleChange}
						/>
						{submitted && !username && <div>Username is required</div>}
					</div>
					<div className={submitted && !password ? ' has-error' : ''}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							value={password}
							onChange={this.handleChange}
						/>
						{submitted && !password && <div>Password is required</div>}
					</div>
					<div>
						<button className="btn">SignIn</button>
						{loggingIn}
						<Link to="/signup" className="link">
							SignUp
						</Link>
					</div>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { loggingIn } = state.authentication;
	return {
		loggingIn,
	};
}

const connectedSigninPage = connect(mapStateToProps)(SigninPage);
export { connectedSigninPage as SigninPage };
