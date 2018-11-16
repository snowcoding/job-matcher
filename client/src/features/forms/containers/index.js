import React, { Component } from "react";
import { connect } from "react-redux";
import Forms from "../components/index";
import TypeForm from "react-typeform";

class FormsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			company_name: "",
			desired_title: "",
			summary: "",
			old_password: "",
			new_password: "",
			new_password2: "",
			top_skills: "",
			additional_skills: "",
			familiar_with: "",
			experience: "",
			eduction: ""
		};
	}
	submit() {
		// Call your submit function here
	}
	render() {
		return (
			<TypeForm onSubmit={this.submit} submitBtnText="done">
				<Forms text="question 1" />
				<Forms text="question 2" />
				<Forms text="question 3" />
			</TypeForm>
		);
	}
}

export default connect()(FormsContainer);
