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
      jobSelected: false,
      jobFormData: {
        title: "",
        salary_min: 0,
        salary_max: 0,
        top_skills: "",
        extra_skills: "",
        familiar_with: "",
        description: "",
        requirements: ""
      }
    };
  }

  //Call the GET /jobs/ endoint to get all jobs from this employer:
  componentDidMount() {
    API.endpoints.jobs().then(res => {
      const jobs = res.data;
      this.setState({ jobs });
    });
  }

  //Toggle the Modal
  toggleJobModal = () => {
    this.setState({
      jobModal: !this.state.jobModal
    });
  };

  //Handler that will fire each time a job card is clicked
  jobCardClickHandler = jobId => {
    if (jobId) {
      //Find the array Index with the jobId selected
      let jobSelected = this.state.jobs.filter(cv => cv.id === jobId)[0];

      //Set the Selected Job state:
      this.setState({ jobSelected });
    } else {
      //set the state to false:
      this.setState({ jobSelected: false });
    }

    this.toggleJobModal();
  };

  //Anytime a form element changes,handle the updating of state here:
  onFormChange = e => {
    const { name, value } = e.target;
    this.setState({
      jobFormData: { ...this.state.jobFormData, [name]: value }
    });
  };

  //Handler for creating a new job posting
  createJobHandler = () => {
    //Turn all skills fields into Arrays:
    let jobFormData = { ...this.state.jobFormData };
    jobFormData.top_skills = jobFormData.top_skills
      ? jobFormData.top_skills.split(" ")
      : [];
    jobFormData.extra_skills = jobFormData.extra_skills
      ? jobFormData.extra_skills.split(" ")
      : [];
    jobFormData.familiar_with = jobFormData.familiar_with
      ? jobFormData.familiar_with.split(" ")
      : [];

    //Call the POST endpoint:
    API.endpoints.createJob(jobFormData).then(res => {
      const job = res.data;
      console.log(job);
    });

    //Toggle the Modal
    this.toggleJobModal();
  };

  editJobHandler = jobId => {
    console.log("editJobHandler clicked!");
    //Cal the PATCH endpoint:

    //Toggle the Modal
    this.toggleJobModal();
  };

  deleteJobHandler = jobId => {
    console.log("deleteJobHandler clicked!");

    //Call the Delete endpoint

    this.toggleJobModal();
  };

  render() {
    //Destructure the state:
    const { jobs, jobModal, jobSelected } = this.state;

    return (
      <div>
        <JobCardDeck>
          {/* <NewJobCard newJobCardClickHandler={this.newJobCardClickHandler}/> */}
          <JobCard jobCardClickHandler={e => this.jobCardClickHandler(e)} />
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
        <JobModal
          toggleJobModal={this.toggleJobModal}
          isOpen={jobModal}
          jobData={jobSelected ? jobSelected : false}
          createJobHandler={this.createJobHandler}
          editJobHandler={this.editJobHandler}
          deleteJobHandler={this.deleteJobHandler}
          onFormChange={this.onFormChange}
        />
      </div>
    );
  }
}

export default Job;
