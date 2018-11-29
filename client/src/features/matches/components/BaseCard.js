import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

const CardContainer = styled(Card)`
  width: 200px;
`;

const BaseCard = props => {
  const {
    name,
    jobId,
    title,
    img,
    img_alt,
    modalToggler,
    clickHandler2,
    clickHandler3
  } = props || false;
  return (
    <CardContainer onClick={() => modalToggler(jobId)}>
      <CardBody>
        <div>
          <img src={img} alt={img_alt} width="50px" />
          <CardTitle>{name}</CardTitle>
        </div>
        <CardSubtitle>{title}</CardSubtitle>
        <Button onClick={() => clickHandler2(jobId)}>Archive</Button>
        <Button onClick={() => clickHandler3(jobId)}>Email</Button>
      </CardBody>
    </CardContainer>
  );
};
export default BaseCard;

BaseCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  jobId: PropTypes.any.isRequired,
  modalToggler: PropTypes.func.isRequired,
  clickHandler2: PropTypes.func.isRequired,
  clickHandler3: PropTypes.func.isRequired
};
BaseCard.defaultProps = {
  jobId: 0,
  name: "default username",
  title: "default title",
  img: "https://www.drupal.org/files/issues/default-avatar.png",
  img_alt: "alt",
  modalToggler: () => {
    console.log("button one");
  },
  clickHandler2: () => {
    console.log("button two");
  },
  clickHandler3: () => {
    console.log("button three");
  }
};
