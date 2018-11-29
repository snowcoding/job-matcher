import React, { Component } from "react";
import Form from "../components/";
import connect from "react-redux/es/connect/connect";
import { updateProfileImg } from "../store/action";
import { updateUser } from "../../auth/store/action";

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
    confirm: {
      type: "checkbox",
      value: false,
      label: "confirm spending",
      controlledLabelClass: "form-label-checkbox"
    },
    photo: {
      type: "img",
      value: "",
      src: "",
      label: "photo"
    },
    imgChange: {
      type: "checkbox",
      value: false,
      label: "change your photo",
      controlledLabelClass: "form-label-checkbox"
    }
  };

  componentDidMount = () => {
    //TODO get current user info, to populate the form.
    let updateState = JSON.parse(JSON.stringify(this.state));
    if (this.props.currentUser) {
      updateState.name.value = `${this.props.currentUser.first_name} ${
        this.props.currentUser.last_name
      }`;
      updateState.photo.src = `${this.props.currentUser.photo}`;
      updateState.email.value = this.props.currentUser.email;
      this.setState({
        ...updateState
      });
    }
  };

  onChange = e => {
    let updateState = JSON.parse(JSON.stringify(this.state));
    if (e.target.type === "checkbox") {
      updateState[e.target.name].value = e.target.checked;
    } else if (e.target.type === "img") {
      updateState[e.target.name].src = e.target.value;
    } else {
      updateState[e.target.name].value = e.target.value;
    }
    this.setState({ ...updateState });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let userType = this.props.currentUser.is_seeker ? "seeker" : "employer";
    let userId = this.props.currentUser.id;
    let data = this.state;
    this.props.updateUser(userType, userId, {
      email: data.email.value,
      first_name: data.name.value.split(" ")[0],
      last_name: data.name.value.split(" ")[1],
      photo: data.photo.value,
      confirm: data.confirm.value
    });
  };
  closeUploadModal = e => {
    let updateState = JSON.parse(JSON.stringify(this.state));
    updateState.imgChange.value = false;
    this.setState({ ...updateState });
  };

  render() {
    return this.props.currentUser ? (
      <React.Fragment>
        <Form
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          btnName="Update Personal Info"
          state={this.state}
          title="Personal"
        />
        <ImagePicker
          open={this.state.imgChange.value}
          closeUploadModal={this.closeUploadModal}
        />
      </React.Fragment>
    ) : null;
  }
}
const MapStateToProps = state => ({
  currentUser: state.user.currentUser,
  authenticatoin_succeed: state.user.authenticatoin_succeed
});
export default connect(
  MapStateToProps,
  { updateProfileImg, updateUser }
)(PersonalContainer);
