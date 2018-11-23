import React, { Component } from "react";
import styled from "styled-components";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

const CardContainer = styled(Card)`
  width: 200px;
`;

class JobCard extends Component {
  constructor(props) {
    super(props);

    // this.jobCardClickHandler = this.jobCardClickHandler.bind(this);
  }

  clickHandler = () => {
    this.props.jobCardClickHandler(this.props.jobId);
  };

  render() {
    return (
      <CardContainer onClick={this.clickHandler}>
        <CardBody>
          <CardTitle>{this.props.companyName}</CardTitle>
          <CardSubtitle>{this.props.title}</CardSubtitle>
          <Button>Archive</Button>
          <Button>Edit</Button>
        </CardBody>
      </CardContainer>
    );
  }
}
export default JobCard;
