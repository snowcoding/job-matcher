import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, CardDeck } from "reactstrap";
import styled from "styled-components";
//import BaseCard from "../components/BaseCard";
import BaseModal from "../components/BaseModal";
import NewBaseCard from "../../../presentation/BaseCard";
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

  btn1 = () => {
    console.log("btn 1 clicked");
  };
  btn2 = () => {
    console.log("btn 2 clicked");
  };

  //Handler that will fire each time a job card is clicked
  matchCardClickHandler = match => {
    return wrapper => {
      // Set the Selected Job state:
      this.setState({ matchSelected: { ...match } });
      this.toggleJobModal();
    };
  };

  render() {
    //Destructure the state:
    //console.log("state: ", this.state);
    const { matchesModal, matchSelected } = this.state;
    const job = matchSelected.job ? matchSelected.job : {};
    console.log("state: ", job);

    let { matchesRequestSuccess, currentUser, matches } = this.props;

    matches =
      matchesRequestSuccess && currentUser.is_seeker
        ? matches.map(match => ({
            ...match,
            userData: match.job.title,
            name: match.employer.company_name
          }))
        : matches.map(match => ({
            ...match,
            userData: match.job.title,
            name: match.seeker.first_name
          }));

    return (
      <React.Fragment>
        <JobCardDeck className="card-decks">
          {!this.props.matchesRequestSuccess && <h4>fetching data</h4>}

          {this.props.matchesRequestSuccess &&
            matches.map(match => (
              <NewBaseCard
                key={match.id}
                id={match.id}
                title={match.userData}
                name={`${match.name}`}
                //${match.userData.last_name
                //userData={this.props.match.userData}

                toggle={this.matchCardClickHandler(match)}
                btn1Text={"Archive"}
                btn2Text={"Email"}
                btn1={this.btn1}
                btn2={this.btn2}
              />
            ))}
        </JobCardDeck>
        {
          <Modal
            toggleJobModal={this.toggleJobModal}
            isOpen={matchesModal}
            matchData={matchSelected}
          >
            <ModalHeader toggle={this.toggleJobModal}>Details </ModalHeader>
            <ModalBody>
              {
                <NewBaseCard
                  id={this.id}
                  //title={`${this.state.matchData.seeker.title}`}
                  name={job.title}
                  skills={job.top_skills}
                  summary={job.requirements}
                  salary_min={job.salary_min}
                  salary_max={job.salary_max}
                  description={job.description}
                  is_active={job.is_active}
                  // btn1Text={"Cancel"}
                  // btn2Text={"Apply"}
                  // btn1={this.btn1}
                  // btn2={this.btn2}
                />
              }
            </ModalBody>
          </Modal>
        }
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
