import React, { Component } from "react";
import { CardDeck } from "reactstrap";
import API from "../../../api";
import styled from "styled-components";
import JobCard from "./JobCard";

const JobCardDeck = styled(CardDeck)`
  max-width: 800px;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

class Job extends Component {
  constructor() {
    super();
    this.state = {
      jobs: []
    };
  }

  //Make a call to get all the jobs:
  // async componentWillMount() {
  //   try{
  //     const response = await API.endpoints.jobs()
  //       this.setState({jobs:response.data})
  //
  //   }catch (error) {
  //     console.error(error);
  //   }
  // }

  componentDidMount() {
    API.endpoints.jobs().then(res => {
      const jobs = res.data;
      this.setState({ jobs });
    });
  }

  render() {
    return (
      <JobCardDeck>
        {this.state.jobs.map(job => (
          <JobCard title={job.title} companyName={job.employer.company_name} />
        ))}
      </JobCardDeck>
    );
  }
}

export default Job;
