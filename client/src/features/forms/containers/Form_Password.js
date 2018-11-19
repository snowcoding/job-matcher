import React, { Component } from "react";
import Form from "../components/";

class PasswordContainer extends Component {
	state = {
		old_password: {
			type: "password",
			name: "old password",
			value: ""
		},
		new_password: {
			type: "password",
			name: "new password",
			value: ""
		},
		new_password2: {
			id: "password2",
			type: "password",
			name: "confirm password",
			value: ""
		}
	};

	onChange = e => {
		let updateState = { ...this.state };
		updateState[e.target.name].value = e.target.value;
		this.setState({ ...updateState });
	};

	render() {
		return (
			<Form
				onChange={this.onChange}
				state={this.state}
				title="Password"
			/>
		);
	}
}

export default PasswordContainer;
