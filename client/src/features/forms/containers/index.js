import React, { Component } from "react";
import { connect } from "react-redux";
import Forms from "../components/index";
import EducationContainer from "./Form_Education";
import {
	updateProfile,
	updateProfileImg,
	updateProfilePassword
} from "../store/action";
// import TypeForm from "react-typeform";
// import StepZilla from "react-stepzilla";

class FormsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: {
				value: ""
			},
			email: {
				value: ""
			},
			company_name: {
				value: ""
			},
			img: {
				type: "file",
				value: ""
			},
			desired_title: {
				value: ""
			},
			summary: {
				value: ""
			},

			top_skills: {
				value: ""
			},
			additional_skills: {
				value: ""
			},
			familiar_with: {
				value: ""
			},
			experience: {
				value: ""
			},
			old_password: {
				type: "password",
				value: ""
			},
			new_password: {
				type: "password",
				value: ""
			},
			new_password2: {
				type: "password",
				value: ""
			}
		};
	}
	componentDidMount = () => {
		if (this.props.currentUser) {
			let name = `${this.props.currentUser.first_name} ${
				this.props.currentUser.last_name
			}`;
			let { email } = this.props.currentUser;
			this.setState({
				name,
				email
			});
		}
	};
	inputHandler = e => {
		let updateState = { ...this.state };
		updateState[e.target.name].value = e.target.value;

		this.setState({ ...updateState });
	};
	handleSubmit = e => {
		// Call your submit function here
		e.preventDefault();
		console.log(this.state);
	};
	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				<Forms
					text="question 1"
					state={this.state}
					is_seeker={this.props.is_seeker}
					inputHandler={this.inputHandler}
				/>
				<button type="submit">Save</button>
				<EducationContainer />
			</form>
		);
	}
}
const MapStateToProps = state => ({
	currentUser: state.user.currentUser,
	is_seeker: state.user.is_seeker
});
export default connect(
	MapStateToProps,
	{ updateProfile, updateProfileImg, updateProfilePassword }
)(FormsContainer);
