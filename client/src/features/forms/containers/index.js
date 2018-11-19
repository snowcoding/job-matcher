import React, { Component } from "react";
import { connect } from "react-redux";
import Forms from "../components/index";
import EducationContainer from "./Form_Education";
import ExprienceContainer from "./Form_Exprience";
import PasswordContainer from "./Form_Password";
import SkillsContainer from "./Form_Skills";
import PersonalContainer from "./Form_Personal";
import {
	updateProfile,
	updateProfileImg,
	updateProfilePassword
} from "../store/action";
// import TypeForm from "react-typeform";
import StepZilla from "react-stepzilla";

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
		let steps = [
			{
				name: "personal",
				component: (
					<Forms
						title="Personal"
						state={this.state}
						is_seeker={this.props.is_seeker}
						onChange={this.inputHandler}
					/>
				)
			},
			{
				name: "Skill",
				component: <SkillsContainer />
			},
			{
				name: "Exprience",
				component: <ExprienceContainer />
			},
			{
				name: "Education",
				component: <EducationContainer />
			},
			{
				name: "Password",
				component: <PasswordContainer />
			}
		];
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				<StepZilla steps={steps} />
				{/* <button type="submit">Save</button> */}
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
