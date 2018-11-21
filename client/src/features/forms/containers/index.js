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
import FormSkills from './FormSkills';

import PropTypes from "prop-types";

class ProfileContainer extends Component {
	//ProfileContainer  will connect all form container and to profile component for rendering to screen.
    componentDidMount =  () => {
		//TODO get current user info, to populate the form.
		this.props.getProfile();

	};

	render() {
		let steps = {
			"Personal": <FormPersonal />,
			"Skill": <FormSkills />,
			"Company": <FormCompany />,
			"Education": <FormEducation />,
			"Exprience": <FormExprience />,
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
});
export default connect(
	MapStateToProps,
	{  updateProfileImg, updateProfilePassword, getProfile, updateUser }
)(ProfileContainer);

ProfileContainer.propTypes = {
	currentUser: PropTypes.object,
	is_seeker:  PropTypes.bool,
};