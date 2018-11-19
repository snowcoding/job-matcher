import React, { Component } from "react";
import Form from "../components/";

class PersonalContainer extends Component {
	state = {
		name: {
			name: "full name",
			value: ""
		},
		email: {
			value: ""
		},
		company_name: {
			name: "company name",
			value: ""
		},
		img: {
			name: "image",
			type: "file",
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
				title="Personal"
			/>
		);
	}
}

export default PersonalContainer;
