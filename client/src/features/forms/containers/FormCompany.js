import React, { Component } from "react";
import Form from "../components/";
import connect from "react-redux/es/connect/connect";
import {updateProfileImg, updateProfilePassword} from "../store/action";
import {getProfile, updateUser} from "../../auth/store/action";

class CompanyContainer extends Component {
	state = {
		company: {
			name: "company name",
			value: ""
		},
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
		let url =  "employers/";
		url += this.props.currentUser.id + "/";
		let data = this.state;
		this.props.updateUser({
			company: data.company.value
		}, url)

	}

	render() {
		return (
			<Form
				title="company"
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
)(CompanyContainer);
