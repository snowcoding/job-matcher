import React, { Component } from "react";
import {
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

class JobModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggleJobModal}
        className="modal-lg"
      >
        <ModalHeader toggle={this.props.toggleJobModal}>
          Add / Edit Job
        </ModalHeader>
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
                  defaultValue={this.props.jobData.title}
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
                  defaultValue={this.props.jobData.salary_min}
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
                  defaultValue={this.props.jobData.salary_max}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="top-skills" sm={2}>
                Top Skills
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="top-skills"
                  id="top-skills"
                  defaultValue={this.props.jobData.top_skills}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="extra-skills" sm={2}>
                Extra Skills
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="extra-skills"
                  id="extra-skills"
                  multiple
                  defaultValue={this.props.jobData.extra_skills}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="familiar-with" sm={2}>
                Familiar With
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="familiar-with"
                  id="familiar-with"
                  multiple
                  defaultValue={this.props.jobData.familiar_with}
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
                  defaultValue={this.props.jobData.description}
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
                  defaultValue={this.props.jobData.requirements}
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggleJobModal}>
            Cancel
          </Button>
          <Button color="primary" onClick={this.props.toggleJobModal}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default JobModal;
