import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, CardDeck } from "reactstrap";
import styled from "styled-components";
//import BaseCard from "../components/BaseCard";
import BaseModal from "../components/BaseModal";
import NewBaseCard from "../../../presentation/BaseCard";
import { getMatches } from "../store/action";
import { connect } from "react-redux";

const JobCardDeck = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px auto;
`;
const CardContainer = styled.div`
  width: 500px;
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
    const seeker = matchSelected.seeker ? matchSelected.seeker : {};
    console.log("job: ", job);
    console.log("seeker: ", seeker);

    let card;
    if (this.props.currentUser.is_seeker) {
      card = (
        <NewBaseCard
          //name={job.employer.company_name}
          title={job.title}
          is_expandable={true}
          is_open={true}
          //fullCardArrow={this.showFullCard}
          top_skills={job.top_skills}
          extra_skills={job.extra_skills}
          familiar_with={job.familiar_with}
          salary_min={job.salary_min}
          salary_max={job.salary_max}
          description={job.description}
          requirements={job.requirements}
          is_active={job.is_active}
        />
      );
    } else {
      card = (
        <NewBaseCard
          name={seeker.first_name}
          is_open={true}
          education={"seeker.education"}
          experience={"seeker.experience"}
          desired_title={"seeker.desired_title"}
          //free_apps={seeker.free_apps}
        />
      );
    }

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
                toggle={this.matchCardClickHandler(match)}
                btn1Text={"Archive"}
                btn2Text={"Email"}
                btn1={this.btn1}
                btn2={this.btn2}
                width={"300px"}
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
            <ModalBody>{<CardContainer>{card}</CardContainer>}</ModalBody>
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
