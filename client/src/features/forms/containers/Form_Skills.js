import React, { Component } from "react";
import Form from "../components/";

class SkillsContainer extends Component {
	state = {

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
