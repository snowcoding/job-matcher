import React, { Component } from "react";
import { signUpUser } from "../store/action";
import { connect } from "react-redux";
class SignUp extends Component {
	state = {
		email: "",
		password: "",
		// password2: "",
		first_name: "",
		last_name: "",
		is_seeker: false
	};
	inputHandler = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.signUpUser(this.state);
		console.log(this.props);
		if (this.props.state.currentUser)
			this.setState({
				email: "",
				password: "",
				// password2: "",
				first_name: "",
				last_name: "",
				is_seeker: false
			});
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					name="email"
					placeholder="Email"
					value={this.state.email}
					onChange={this.inputHandler}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={this.state.password}
					onChange={this.inputHandler}
				/>
				{/* <input
					type="password"
					name="password2"
					placeholder="Password"
					value={this.state.password2}
					onChange={this.inputHandler}
				/> */}
				<input
					type="text"
					name="first_name"
					placeholder="First name"
					value={this.state.first_name}
					onChange={this.inputHandler}
				/>
				<input
					type="text"
					name="last_name"
					placeholder="Last name"
					value={this.state.last_name}
					onChange={this.inputHandler}
				/>
				<button type="submit">Sign Up</button>
				<br />
				{this.props.state.fetching &&
					"registering new user, this might take a mint"}
				{this.props.state.error && this.props.state.error}
			</form>
		);
	}
}

const MapPropsToState = state => ({
	state: state.user
});
export default connect(
	MapPropsToState,
	{ signUpUser }
)(SignUp);
