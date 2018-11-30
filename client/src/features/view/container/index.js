import React, { Component } from "react";
import ViewElement from "../component/";
import { connect } from "react-redux";
import { getRandomUser, postSuperAction } from "../store/action";

class ViewContainer extends Component {
  componentDidMount = () => {
    this.getRandomUserS();
  };

  getRandomUserS = () => {
    const userType = this.props.user.currentUser.is_seeker;
    if (userType) {
      this.props.getRandomUser("job");
    } else {
      this.props.getRandomUser("seeker");
    }
  };
  postMatchAction = () => {
    const userType = this.props.user.currentUser.is_seeker;
    let data;
    if (userType) {
      data = {
        job_id: this.props.data.id,
        seeker_action: "SUPER",
        employer_action: "",
        seeker_id: this.props.user.currentUser.id,
        employer_id: this.props.data.employer.id
      };
    } else {
      data = {
        job_id: this.props.data.id,
        seeker_action: "",
        employer_action: "SUPER",
        seeker_id: "35f7fn16rt",
        employer_id: this.props.user.currentUser.id
      };
    }
    this.props.postSuperAction(data);
    this.getRandomUserS();
  };

  postInterest = () => {
    const userType = this.props.user.currentUser.is_seeker;
    let data;
    if (userType) {
      data = {
        job_id: this.props.data.id,
        seeker_action: "APPLY",
        employer_action: "",
        seeker_id: this.props.user.currentUser.id,
        employer_id: this.props.data.employer.id
      };
    } else {
      data = {
        job_id: this.props.data.id,
        seeker_action: "",
        employer_action: "CALL",
        seeker_id: "35f7fn16rt",
        employer_id: this.props.user.currentUser.id
      };
    }
    this.postCallAction(data);
    this.getRandomUserS();
  };

  postCallAction = data => {
    this.props.postSuperAction(data);
    this.getRandomUserS();
  };
  render() {
    console.log("view container:", this.props.data);
    let credit;
    if (this.props.user.currentUser.is_seeker) {
      credit = this.props.user.currentUser.free_apps;
    } else {
      credit = this.props.user.currentUser.free_calls;
    }
    return (
      <ViewElement
        data={this.props.data}
        success={this.props.success}
        skip={this.getRandomUserS}
        credit={credit}
        super={this.postMatchAction}
        call={this.postInterest}
      />
    );
  }
}
const MapStateToProps = state => {
  return {
    user: state.user,
    data: state.randomUser.data,
    success: state.randomUser.VIEW_SUCCESS,
    FETCHING_GET_VIEW: state.randomUser.FETCHING_GET_VIEW
  };
};

export default connect(
  MapStateToProps,
  { getRandomUser, postSuperAction }
)(ViewContainer);
