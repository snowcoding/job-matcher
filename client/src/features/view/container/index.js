import React, { Component } from "react";
import ViewElement from "../component/";
import { connect } from "react-redux";
import { getRandomUser } from "../store/action";

class ViewContainer extends Component {
  getRandomUserS = () => {
    this.props.getRandomUser("seeker");
  };

  //  getRandomUserE =( ) =>{
  //      console.log("ViewContainer:", this.props.data);
  //     this.props.getRandomUser("employer");
  // };

  render() {
    return <ViewElement data={this.props.data} onClick={this.getRandomUserS} />;
  }
}
const MapStateToProps = state => {
  console.log("view container:", state);
  return {
    data: state.randomUser.data,
    FETCHING_GET_VIEW: state.randomUser.FETCHING_GET_VIEW
  };
};

export default connect(
  MapStateToProps,
  { getRandomUser }
)(ViewContainer);
