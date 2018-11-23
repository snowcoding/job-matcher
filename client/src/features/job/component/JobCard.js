import React, { Component } from "react";
import styled from "styled-components";
import {
  Media,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const CardContainer = styled(Card)`
  width: 200px;
`;

const JobCard = props => {
  return (
    <CardContainer>
      <CardBody>
        <CardTitle>{props.companyName}</CardTitle>
        <CardSubtitle>{props.title}</CardSubtitle>
        <Button>Archive</Button>
        <Button>Edit</Button>
      </CardBody>
    </CardContainer>
  );
};
export default JobCard;
