import React, { Component } from "react";
import Form from "../components/";
import connect from "react-redux/es/connect/connect";
import {updateProfileImg, updateProfilePassword} from "../store/action";
import {getProfile, updateUser} from "../../auth/store/action";

class PasswordContainer extends Component {
	state = {
		old_password: {
			type: "password",
			name: "old password",
			value: ""
		},
		new_password: {
			type: "password",
			name: "new password",
			value: ""
		},
		new_password2: {
			id: "password2",
			type: "password",
			name: "confirm password",
			value: ""
		}
	};

	onChange = e => {
		let updateState = { ...this.state };
		updateState[e.target.name].value = e.target.value;
		this.setState({ ...updateState });
	};
	onSubmit =(e) =>{
		console.log("form password on submit func");
		e.preventDefault();
		console.log(this.state);
		let url = this.props.is_seeker ? "seekers/" : "employers/";
		url += this.props.currentUser.id + "/";
		let data = this.state;
		this.props.updateUser({
							oldPassword: data.old_password.value,
							newPassword: data.new_password.value,
						}, url)
	}

	render() {
		return (
			<Form
				title="Password"
				onSubmit={this.onSubmit}
				onChange={this.onChange}
				state={this.state}
			/>
		);
	}
}
const MapStateToProps = state => ({
	currentUser: state.user.currentUser,
	is_seeker: state.user.is_seeker,
	authenticatoin_succeed: state.authenticatoin_succeed
});
export default connect(
	MapStateToProps,
	{  updateProfileImg, updateProfilePassword, getProfile, updateUser }
)(PasswordContainer);


