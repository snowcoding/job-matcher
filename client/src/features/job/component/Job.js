import React, { Component } from "react";
import { CardDeck } from "reactstrap";
import API from "../../../api";
import styled from "styled-components";
import JobCard from "./JobCard";
import JobModal from "./JobModal";

const JobCardDeck = styled(CardDeck)`
  max-width: 800px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

class Job extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      jobModal: false,
      jobSelected: {}
    };
  }

  componentWillMount() {
    API.endpoints.jobs().then(res => {
      const jobs = res.data;
      this.setState({ jobs });
    });
  }

  toggleJobModal = () => {
    this.setState({
      jobModal: !this.state.jobModal
    });
  };

  jobCardClickHandler = jobId => {
    //Find the array Index with the jobId selected
    let jobSelected = this.state.jobs.filter(cv => cv.id == jobId)[0];

    //Set the Selected Job state:
    this.setState({ jobSelected });

    this.toggleJobModal();
  };

  render() {
    //Destructure the state:
    const { jobs, jobModal, jobSelected } = this.state;

    return (
      <div>
        <JobCardDeck>
          {jobs.map(job => (
            <JobCard
              key={job.id}
              jobId={job.id}
              title={job.title}
              companyName={job.employer.company_name}
              jobCardClickHandler={e => this.jobCardClickHandler(e)}
            />
          ))}
        </JobCardDeck>

        {/* If a value does not exist, check for existence before rendering */}
        {jobSelected && (
          <JobModal
            toggleJobModal={this.toggleJobModal}
            isOpen={jobModal}
            jobData={jobSelected}
          />
        )}
      </div>
    );
  }
}

export default Job;
