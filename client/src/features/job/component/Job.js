import React, { Component } from "react";
import {
  CardDeck,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col
} from "reactstrap";
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
      jobs: [],
      jobModal: false,
      jobModalIndex: 0
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
    console.log(jobId);
    //Find the array Index with the jobId selected
    console.log(this.state.jobs[0].title);
    //Set that as the active job
    this.toggleJobModal();
  };

  render() {
    return (
      <div>
        <JobCardDeck>
          {this.state.jobs.map(job => (
            <JobCard
              key={job.id}
              jobId={job.id}
              title={job.title}
              companyName={job.employer.company_name}
              jobCardClickHandler={e => this.jobCardClickHandler(e)}
            />
          ))}
        </JobCardDeck>

        <Modal
          isOpen={this.state.jobModal}
          toggle={this.toggleJobModal}
          className="modal-lg"
        >
          <ModalHeader toggle={this.toggleJobModal}>Add / Edit Job</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="title" sm={2}>
                  Job Title{" "}
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    defaultValue={"title"}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="salary-min" sm={2}>
                  Salary Min
                </Label>
                <Col sm={10}>
                  <Input
                    type="number"
                    name="salary-min"
                    id="salary-min"
                    placeholder="Minimum Salary"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="salary-max" sm={2}>
                  Salary Max
                </Label>
                <Col sm={10}>
                  <Input
                    type="number"
                    name="salary-max"
                    id="salary-max"
                    placeholder="Maximum Salary"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="top-skills" sm={2}>
                  Top Skills
                </Label>
                <Col sm={10}>
                  <Input type="text" name="top-skills" id="top-skills" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="add-skills" sm={2}>
                  Additional Multiple
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="add-skills"
                    id="add-skills"
                    multiple
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="other-skills" sm={2}>
                  Familiar With
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="other-skills"
                    id="other-skills"
                    multiple
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="description" sm={2}>
                  Description
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="description"
                    id="description"
                    multiple
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="requirements" sm={2}>
                  Requirements
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="requirements"
                    id="requirements"
                    multiple
                  />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleJobModal}>
              Cancel
            </Button>
            <Button color="primary" onClick={this.toggleJobModal}>
              Save
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Job;
