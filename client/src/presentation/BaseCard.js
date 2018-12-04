import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  UncontrolledTooltip,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Alert
} from "reactstrap";

const ShowFullCard = styled.div`
  display: ${props => (props.is_open ? "block" : "none")};
`;
const StyledH5 = styled.h5`
  color: ${props => (props.is_seeker ? "red" : "green")};
  text-transform: capitalize;
`;
const StyledCard = styled(Card)`
    width: ${props => (props.width ? props.width : "100%")}
    margin: 10px 0;
    border: none;
    text-align: start;
    border-radius: 10px;
`;
const CardHeader = styled.div`
  width: "100%";
  height: 100px;
  display: flex;
  border: 1px solid #8c8989ab;
  border-bottom: none;
  border-radius: 10px;
  img {
    width: 100px;
  }
  div {
    flex: 1;
    margin: auto;
    margin-left: 20px;
  }
`;
const StyledCardBody = styled(CardBody)`
  border: 1px solid #8c8989ab;
  border-radius: 10px;
  text-align: start;
  div {
    text-align: center;
  }
`;
const CardFooter = styled.div`
  width: "100%";
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  border: 1px solid #8c8989ab;
  border-radius: 10px;
  margin-top: 10px;
`;

const StyledCardTitle = styled(CardTitle)`
  font-size: 18px;
  border-bottom: 1px solid #8c8989ab;
  border-radius: 10px;
  text-transform: capitalize;
`;

const ExplicitBaseCard = props => {
  return (
    <StyledCard width={props.width} onClick={props.toggle}>
      <CardHeader className="styled-card-header">
        <CardImg
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <div>
          <StyledH5 is_seeker={props.is_seeker}>{props.name}</StyledH5>
          <CardSubtitle>{props.summary}</CardSubtitle>
        </div>
      </CardHeader>
      <StyledCardBody className="card-body">
        <StyledCardTitle className="card-title">{props.title}</StyledCardTitle>
        <CardText>{props.skills}</CardText>
        <ShowFullCard is_open={props.is_open} className="showfullcard">
          <CardText>{props.experience}</CardText>
          <CardText>{props.salary_min}</CardText>
          <CardText>{props.salary_max}</CardText>
          <CardText>{props.education}</CardText>
          <CardText>{props.description}</CardText>
          <CardText>{props.requirements}</CardText>
        </ShowFullCard>
        <div>
          {props.is_expandable && (
            <Button onClick={props.fullCardArrow}>V</Button>
          )}
        </div>
      </StyledCardBody>
      {props.dropDown && (
        <UncontrolledButtonDropdown>
          <DropdownToggle caret>{props.dropDownToggleText}</DropdownToggle>
          <DropdownMenu>
            {props.dropDown.map((job, index) => (
              <DropdownItem
                key={job.id}
                onClick={() => props.jobSelected(job.id)}
              >
                {job.title}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      )}
      <CardFooter className="card-footer">
        {props.btn1 && (
          <Button onClick={props.btn1} disabled={!props.is_valid}>
            {props.btn1Text}
          </Button>
        )}
        {props.btn2 && (
          <Button onClick={props.btn2} disabled={!props.is_valid}>
            {props.btn2Text}
          </Button>
        )}
        {props.btn3 && (
          <Button onClick={props.btn3} id="toggler" disabled={!props.is_valid}>
            {props.btn3Text}
          </Button>
        )}
      </CardFooter>
      {props.btn3Hover && (
        <UncontrolledTooltip placement="right" target="#toggler">
          {props.btn3Hover}
        </UncontrolledTooltip>
      )}
      {props.outOfCreditAlert && (
        <Link to="/billing">
          <Alert color="danger">{props.outOfCreditAlert}</Alert>
        </Link>
      )}
    </StyledCard>
  );
};

export default ExplicitBaseCard;

// is_valid
