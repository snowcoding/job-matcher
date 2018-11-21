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
	onSubmit =(e) =>{
		console.log("form skll on submit func");
		e.preventDefault();
		console.log(this.state);
		let url = this.props.is_seeker ? "seekers/" : "employers/";
		url += this.props.currentUser.id + "/";
		let data;
		if(this.props.is_seeker){

		}else{
			data = this.state;
			this.props.updateUser(data, url)
		}
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

export default SkillsContainer;
