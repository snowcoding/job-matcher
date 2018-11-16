import React, { Component } from "react";
import { connect } from "react-redux";
import Forms from "../components/index";
import TypeForm from "react-typeform";

class FormsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
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
	componentDidMount = () => {
		// let name = `${this.props.currentUser.first_name} ${
		// 	this.props.currentUser.last_name
		// }`;
		// let { email } = this.props.currentUser;
		// this.setState({
		// 	name,
		// 	email
		// });
	};
	inputHandler = e => {
		this.setState({ [e.target.name]: e.target.v });
	};
	submit() {
		// Call your submit function here
	}
	render() {
		return (
			<TypeForm onSubmit={this.submit} submitBtnText="done">
				<Forms
					text="question 1"
					state={this.state}
					is_seeker={this.props.is_seeker}
					inputHandler={this.inputHandler}
				/>
				<Forms
					text="question 2"
					state={this.state}
					is_seeker={this.props.is_seeker}
					inputHandler={this.inputHandler}
				/>
				{/* <Forms text="question 3" /> */}
			</TypeForm>
		);
	}
}
const MapStateToProps = state => ({
	currentUser: state.user.currentUser,
	is_seeker: state.user.is_seeker
});
export default connect(MapStateToProps)(FormsContainer);
