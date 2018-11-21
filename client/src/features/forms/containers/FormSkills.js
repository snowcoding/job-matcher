import React, { Component } from "react";
import Form from "../components/";

class FormSkills extends Component {
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
		extra_skills: {
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
	onSubmit =(e) =>{
		console.log("form skll on submit func");
		e.preventDefault();
		console.log(this.state);
		let url = "seekers/";
		url += this.props.currentUser.id + "/";
		let data = this.state;
		this.props.updateUser({
			desired_title: data.desired_title.value,
			top_skills: data.top_skills.value.split(" "),
			extra_skills: data.extra_skills.value.split(" "),
			other_skills: data.familiar_with.value.split(" ")
		}, url)

	}

	render() {
		return (
			<Form
				onSubmit={this.onSubmit}
				title="Top Skills"
				onChange={this.onChange}
				state={this.state}
			/>
		);
	}
}

export default FormSkills;
