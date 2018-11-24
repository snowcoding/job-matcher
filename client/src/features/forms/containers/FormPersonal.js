import React, { Component } from "react";
import Form from "../components/";
import connect from "react-redux/es/connect/connect";
import {updateProfileImg} from "../store/action";
import {getProfile, updateUser} from "../../auth/store/action";

import ImagePicker from "./FormImages";

class PersonalContainer extends Component {
	state = {
		name: {
			placeholder: "full name",
			value: ""
		},
		email: {
			value: ""
		},
		img: {
			type: "checkbox",
			value: false,
			label: "change your photo"
		}
	};


    componentDidMount =  () => {
		//TODO get current user info, to populate the form.
		let updateState = JSON.parse(JSON.stringify(this.state));
		if(this.props.authenticatoin_succeed){
				updateState.name.value = `${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`;
				updateState.email.value = this.props.currentUser.email;
			this.setState({
				...updateState
			})
		}
	};



    onChange = e => {
		let updateState = JSON.parse(JSON.stringify(this.state));
		if(e.target.type === 'checkbox'){
			updateState[e.target.name].value = e.target.checked;

		}else{

		updateState[e.target.name].value = e.target.value;
		}
		this.setState({ ...updateState });
	};
	onSubmit =(e) =>{
		e.preventDefault();
		console.log(this.state);
		let userType = this.props.is_seeker ? "seeker" : "employer";
		let userId = this.props.currentUser.id ;
		let data = this.state;
		this.props.updateUser(userType, userId, {
			email: data.email.value,
			first_name: data.name.value.split(" ")[0],
			last_name: data.name.value.split(" ")[1],
		})

	}
	closeUploadModal = e =>{
		let updateState = JSON.parse(JSON.stringify(this.state));
		updateState.img.value = false;
		this.setState({...updateState})
	};

	render() {
		return (
			this.props.authenticatoin_succeed ?
				<React.Fragment>
					<Form
						onSubmit={this.onSubmit}
						onChange={this.onChange}
						btnName="Update Personal Info"
						state={this.state}
						title="Personal"
					/>
					<ImagePicker openModal={this.openModal} open={this.state.img.value} closeUploadModal={this.closeUploadModal}/>
				</React.Fragment>
				: null
		);
	}
}
const MapStateToProps = state => ({
	currentUser: state.user.currentUser,
	is_seeker: state.user.is_seeker,
	authenticatoin_succeed: state.user.authenticatoin_succeed
});
export default connect(
	MapStateToProps,
	{  updateProfileImg, getProfile, updateUser }
)(PersonalContainer);

