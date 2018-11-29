import React, { Component } from "react";
import { CardDeck } from "reactstrap";
import styled from "styled-components";
import BaseCard from "../components/BaseCard";
import BaseModal from "../components/BaseModal";
import { getMatches } from "../store/action";
import { connect } from "react-redux";

const JobCardDeck = styled(CardDeck)`
  width: 100%;
  max-width: 900px;
`;

class MatchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchesModal: false,
      matchSelected: {}
    };
  }

  //Call the GET /matches/ endoint to get all matches from this user:
  componentDidMount() {
    this.props.getMatches();
  }

  //Toggle the Modal
  toggleJobModal = () => {
    this.setState({
      matchesModal: !this.state.matchesModal
    });
  };

  //Handler that will fire each time a job card is clicked
  matchCardClickHandler = jobId => {
    let { matchesRequestSuccess, currentUser, matches } = this.props;
    matches =
      matchesRequestSuccess && currentUser.is_seeker
        ? matches.map(match => ({
            ...match,
            userData: match.job,
            seeker: null,
            employer: null,
            job: null
          }))
        : matches.map(match => ({
            ...match,
            userData: match.seeker,
            employer: null,
            seeker: null
          }));

    let matchSelected = matches.filter(cv => cv.id === jobId)[0];

    // Set the Selected Job state:
    this.setState({ matchSelected: { ...matchSelected } });
    this.toggleJobModal();
  };

  render() {
    //Destructure the state:
    const { matchesModal, matchSelected } = this.state;
    let { matchesRequestSuccess, currentUser, matches } = this.props;

    matches =
      matchesRequestSuccess && currentUser.is_seeker
        ? matches.map(match => ({
            ...match,
            userData: match.job,
            seeker: null,
            employer: null,
            job: null
          }))
        : matches.map(match => ({
            ...match,
            userData: match.seeker,
            employer: null,
            seeker: null
          }));
    return (
      <React.Fragment>
        <JobCardDeck>
          {!this.props.matchesRequestSuccess && <h4>fetching data</h4>}

          {this.props.matchesRequestSuccess &&
            matches.map(match => (
              <BaseCard
                key={match.id}
                matchId={match.id}
                title={match.userData.summary}
                name={`${match.userData.first_name} ${
                  match.userData.last_name
                }`}
                userData={match.userData}
                modalToggler={this.matchCardClickHandler}
              />
            ))}
        </JobCardDeck>

        <BaseModal
          toggleJobModal={this.toggleJobModal}
          isOpen={matchesModal}
          matchData={matchSelected}
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
