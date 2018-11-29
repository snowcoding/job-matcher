import React, { Component } from "react";
import { CardDeck } from "reactstrap";
import styled from "styled-components";
import BaseCard from "../components/BaseCard";
import JobModal from "../components/BaseModal";
import { getMatches } from "../store/action";
import { connect } from "react-redux";

const JobCardDeck = styled(CardDeck)`
  max-width: 800px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

class MatchContainer extends Component {
  constructor() {
    super();
    this.state = {
      matchesModal: false,
      matchSelected: false
    };
  }

  //Call the GET /matches/ endoint to get all jobs from this employer:
  componentDidMount() {
    this.props.getMatches();
  }

  //Toggle the Modal
  toggleJobModal = () => {
    this.setState({
      jobModal: !this.state.jobModal
    });
  };

  //Handler that will fire each time a job card is clicked
  jobCardClickHandler = jobId => {
    // Find the array Index with the jobId selected
    let jobSelected = this.props.matches.filter(cv => cv.id === jobId)[0];

    // Set the Selected Job state:
    this.setState({ jobSelected });

    this.toggleJobModal();
  };

  render() {
    //Destructure the state:
    const { matchesModal, matchSelected } = this.state;
    const { matches } = this.props;

    return (
      <React.Fragment>
        <JobCardDeck>
          {!this.props.matchesRequestSuccess && (
            <BaseCard
              modalToggler={this.toggleJobModal}
              name="fetching matches"
            />
          )}

          {this.props.matchesRequestSuccess &&
            matches.map(match => (
              <BaseCard
                key={match.id}
                jobId={match.id}
                title={match.title}
                name={match.name}
                modalToggler={this.toggleJobModal}
                // clickHandler1={e => this.jobCardClickHandler(e)}
              />
            ))}
        </JobCardDeck>

        {/* If a value does not exist, check for existence before rendering */}
        <JobModal
          toggleJobModal={this.toggleJobModal}
          isOpen={matchesModal}
          jobData={matchSelected ? matchSelected : false}
        />
      </React.Fragment>
    );
  }
}
const MapDispatchToProps = state => ({
  matchesRequestSuccess: state.matches.MATCHES_SUCCESS,
  matches: state.matches.matches,
  currentUser: state.user.currentUser
});
export default connect(
  MapDispatchToProps,
  { getMatches }
)(MatchContainer);
