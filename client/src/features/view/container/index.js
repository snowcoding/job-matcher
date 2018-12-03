import React, { Component } from "react";
import { connect } from "react-redux";
import { getRandomUser, postSuperAction } from "../store/action";
import ExplicitBaseCard from "../../../presentation/BaseCard";
import styled from "styled-components";

const MatchContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px auto;
`;
class ViewContainer extends Component {
  state = {
    is_open: false
  };
  componentDidMount() {
    this.getRandomUserHandler();
  }
  showFullCard = e => {
    this.setState({
      is_open: !this.state.is_open
    });
  };

  getRandomUserHandler = () => {
    const userType = this.props.currentUser.is_seeker;
    if (userType) {
      this.props.getRandomUser("job");
    } else {
      this.props.getRandomUser("seeker");
    }
  };
  postMatchActionHandler = () => {
    const userType = this.props.currentUser.is_seeker;
    let data;
    if (userType) {
      data = {
        job_id: this.props.data.id,
        seeker_action: "SUPER",
        employer_action: "",
        seeker_id: this.props.currentUser.id,
        employer_id: this.props.data.employer.id
      };
    } else {
      data = {
        job_id: this.props.data.id,
        seeker_action: "",
        employer_action: "SUPER",
        seeker_id: "35f7fn16rt",
        employer_id: this.props.currentUser.id
      };
    }
    this.props.postSuperAction(data);
    this.getRandomUserHandler();
  };

  postInterest = () => {
    const userType = this.props.currentUser.is_seeker;
    let data;
    if (userType) {
      data = {
        job_id: this.props.data.id,
        seeker_action: "APPLY",
        employer_action: "",
        seeker_id: this.props.currentUser.id,
        employer_id: this.props.data.employer.id
      };
    } else {
      data = {
        job_id: this.props.data.id,
        seeker_action: "",
        employer_action: "CALL",
        seeker_id: "35f7fn16rt",
        employer_id: this.props.currentUser.id
      };
    }
    this.postCallAction(data);
    this.getRandomUserHandler();
  };

  postCallAction = data => {
    this.props.postSuperAction(data);
    this.getRandomUserHandler();
  };
  render() {
    console.log("view container:", this.props.data);
    let card;
    if (this.props.success && !this.props.currentUser.is_seeker) {
      card = (
        <ExplicitBaseCard
          btn1Text={"Skip"}
          btn2Text={"Super"}
          btn3Text={"Call"}
          btn1={this.getRandomUserHandler}
          btn2={this.postMatchActionHandler}
          btn3={this.postInterest}
          name={`${this.props.data.first_name} ${this.props.data.last_name}`}
          title={this.props.data.desired_title}
          summary={this.props.data.id}
          is_seeker={this.props.data.is_seeker}
          fullCardArrow={this.showFullCard}
          is_open={this.state.is_open}
          is_expandable={true}
          education={this.props.data.education}
          experience={this.props.data.experience || "experience"}
          btn3Hover={`You have ${
            this.props.currentUser.free_apps
          } free apps left`}
        />
      );
    } else if (this.props.success && this.props.currentUser.is_seeker) {
      card = (
        <ExplicitBaseCard
          btn1Text={"Skip"}
          btn2Text={"Super"}
          btn3Text={"App"}
          btn1={this.getRandomUserHandler}
          btn2={this.postMatchActionHandler}
          btn3={this.postInterest}
          name={this.props.data.company_name}
          title={this.props.data.title}
          summary={this.props.data.id}
          is_seeker={this.props.data.is_seeker}
          fullCardArrow={this.showFullCard}
          is_open={this.state.is_open}
          is_expandable={true}
          // education={this.props.data.education}
          // experience={this.props.data.experience || "experience"}
          btn3Hover={`You have ${
            this.props.currentUser.free_calls
          } free calls left`}
        />
      );
    }

    if (!this.props.success) {
      return <h1>waiting</h1>;
    }
    return <MatchContainer>{card}</MatchContainer>;
  }
}
const MapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    data: state.randomUser.data,
    success: state.randomUser.VIEW_SUCCESS
  };
};

export default connect(
  MapStateToProps,
  { getRandomUser, postSuperAction }
)(ViewContainer);
