import React, { Component } from "react";
import Form from "../components";

class ExprienceContainer extends Component {
	state = {
		date: {
			date: [new Date(), new Date()],
			id: "expreince_data"
		},
		title: {
			value: ""
		},
		company: {
			value: ""
		},
		location: {
			value: ""
		},
		headline: {
			value: ""
		},
		description: {
			id: "exprience_description",
			value: ""
		}
	};

	onChange = e => {
		let updateState = { ...this.state };
		if (e.target) {
			updateState[e.target.name].value = e.target.value;
		} else {
			updateState.date.date = e;
		}
		this.setState({ ...updateState });
	};

	render() {
		return (
			<Form
				onChange={this.onChange}
				state={this.state}
				title="Expreince"
			/>
		);
	}
}

export default ExprienceContainer;
