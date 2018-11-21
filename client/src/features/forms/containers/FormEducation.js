import React, { Component } from "react";
import Form from "../components";
import connect from "react-redux/es/connect/connect";
import {updateProfileImg, updateProfilePassword} from "../store/action";
import {getProfile, updateUser} from "../../auth/store/action";

class EducationContainer extends Component {
	state = {
		date: {
			id: "education_data",
			date: [new Date(), new Date()]
		},
		school: {
			value: ""
		},
		study: {
			value: ""
		},
		Degree: {
			value: ""
		},
		description: {
			id: "education_description",
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
	onSubmit =(e) =>{
		console.log("form Education on submit func");
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
				title="Education"
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
)(EducationContainer);

