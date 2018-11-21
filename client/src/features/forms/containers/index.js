import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "../components/Profile";
import {
	updateProfileImg,
	updateProfilePassword
} from "../store/action";
import {getProfile,updateUser} from '../../auth/store/action'

class ProfileContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			personal:{
				name: {
					value: ""
				},
				email: {
					value: ""
				},
				img: {
					type: "file",
					value: ""
				},
			},
			company:{
				company_name: {
					name: "company name",
					value: ""
				},
			},
			skill: {
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
				},
			},
			expreince: {
				expreince_date: {
					date: [new Date(), new Date()],
					id: "expreince_data"
				},
				title: {
					value: ""
				},
				company: {
					value: ""
				},
				location: {
					value: ""
				},
				headline: {
					value: ""
				},
				exprience_description: {
					id: "exprience_description",
					value: ""
				},
			},
			education:{
				education_date: {
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
				education_description: {
					id: "education_description",
					value: ""
				},
			},
			password:{
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
			}
		};
	}

	getUserProfile =  () =>{
		this.props.getProfile();
	}
    componentDidMount =  () => {
		this.getUserProfile();
		let updateState = JSON.parse(JSON.stringify(this.state));
		if(this.props.authenticatoin_succeed){
				updateState.personal.name.value = `${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`;
				updateState.personal.email.value = this.props.currentUser.email;
			this.setState({
				...updateState
			})
			console.log("working")
		}

	};
	inputHandler = (name, e) => {
		let updateState = { ...this.state };

		if (e.target) {
			updateState[name][e.target.name].value = e.target.value;
		} else {
			updateState.date.date = e;
		}
		this.setState({ ...updateState });
	};
	handleSubmit = e => {
		// Call your submit function here
		e.preventDefault();
		console.log(this.state);
		let url = this.props.is_seeker ? "/seekers/" : "/employers/";
		url += this.props.currentUser.id + "/";
		let data;
		if(this.props.is_seeker){

		}else{
			data = this.state;
			this.props.updateUser(data, url)
		}
	};
	render() {
		return (
			<Profile currentUser={this.props.currentUser} is_seeker={this.props.is_seeker} state={this.state} onSubmit={this.handleSubmit} onChange={this.inputHandler}/>
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
)(ProfileContainer);
