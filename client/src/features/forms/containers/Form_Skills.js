import React, { Component } from "react";
import Form from "../components/";

class SkillsContainer extends Component {
	state = {
		desired_title: {
			name: "desired title",
			value: ""
		},
		summary: {
			value: ""
		},
		top_skills: {
			name: "top skills",
			value: ""
		},
		additional_skills: {
			name: "additional skills",
			value: ""
		},
		familiar_with: {
			name: "familiar with",
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
				title="Top Skills"
			/>
		);
	}
}

export default SkillsContainer;
