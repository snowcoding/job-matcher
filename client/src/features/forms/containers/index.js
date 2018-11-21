import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "../components/Profile";
import {
	updateProfileImg,
	updateProfilePassword
} from "../store/action";
import {getProfile,updateUser} from '../../auth/store/action';
import FormEducation from './FormEducation';
import FormExprience from './FormExprience';
import FormPassword from './FormPassword';
import FormPersonal from './FormPersonal';
import FormCompany from './FormCompany';

class ProfileContainer extends Component {

    componentDidMount =  () => {
		//TODO get current user info, to populate the form.
		this.props.getProfile();

	};

	render() {
		let steps = {
			"Education": <FormEducation />,
			"Personal": <FormPersonal />,
			"Exprience": <FormExprience />,
			"Company": <FormCompany />,
			"Passowrd": <FormPassword />
		}

		return (
			<Profile  is_seeker={this.props.is_seeker} steps={steps}  />
		)
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
)(ProfileContainer);
