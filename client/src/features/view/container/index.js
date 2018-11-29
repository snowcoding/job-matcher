import React, { Component } from "react";
import ViewElement from "../component/";
import { connect } from "react-redux";
import { getRandomUser } from "../store/action";

class ViewContainer extends Component {
  componentDidMount = () => {
    this.getRandomUserS();
  };

  getRandomUserS = () => {
    const userType = this.props.user.currentUser.is_seeker;
    if (userType) {
      this.props.getRandomUser("employer");
    } else {
      this.props.getRandomUser("seeker");
    }
  };

  //  getRandomUserE =( ) =>{
  //      console.log("ViewContainer:", this.props.data);
  //     this.props.getRandomUser("employer");
  // };

  render() {
    console.log("view container:", this.props.data);
    return (
      <ViewElement
        data={this.props.data}
        success={this.props.success}
        skip={this.getRandomUserS}
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
  { getRandomUser }
)(ViewContainer);
