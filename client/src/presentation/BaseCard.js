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
import ConfirmSpending from "../features/billing/component/ConfirmSpending/ConfirmSpending";

const ShowFullCard = styled.div`
  display: ${props => (props.is_open ? "block" : "none")};
`;
const StyledH5 = styled.h5`
  color: ${props => (props.is_seeker ? "red" : "green")};
  text-transform: capitalize;
  cursor: pointer;
`;
const StyledCard = styled(Card)`
    width: ${props => (props.width ? props.width : "100%")}
    margin: 10px auto;
    border: 1px solid;
    text-align: start;
    border-radius: 10px;
    padding: 15px 10px;
    @media (min-width: 900px) {
    margin: 10px 5px;
  }
`;
const CardHeader = styled.div`
  width: "100%";
  height: 100px;
  display: flex;
  border-radius: 1px;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  img {
    width: 100px;
  }
  div {
    flex: 1;
    margin: auto;
    margin-left: 20px;
  }
  h6 {
    height: 59px;
    overflow: scroll;
  }
`;
const StyledCardBody = styled(CardBody)`
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
  margin-top: 10px;
`;

const StyledCardTitle = styled(CardTitle)`
  font-size: 18px;
  text-transform: capitalize;
`;

const ExplicitBaseCard = props => {
  return (
    <StyledCard width={props.width} onClick={props.toggle}>
      <CardHeader className="styled-card-header">
        <CardImg
          src={
            props.photo || "https://image.flaticon.com/icons/svg/52/52762.svg"
          }
          alt="Card image cap"
        />
        <div>
          <StyledH5 is_seeker={props.is_seeker}>{props.name}</StyledH5>
          <CardSubtitle>{props.summary}</CardSubtitle>
        </div>
      </CardHeader>
      <StyledCardBody className="card-body">
        <StyledCardTitle className="card-title">{props.title}</StyledCardTitle>
        {props.skills &&
          props.skills.map((skill, i) => <CardText key={i}>{skill}</CardText>)}
        {props.extra_skills &&
          props.extra_skills.map((skill, i) => (
            <CardText key={i}>{skill}</CardText>
          ))}
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
          <DropdownToggle caret size="lg" style={{ margin: "auto" }}>
            {props.dropDownToggleText}
          </DropdownToggle>
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
      <CardFooter className="icard-footer">
        {props.btn1 && (
          <Button onClick={props.btn1} disabled={!props.is_valid}>
            {props.btn1Text}
          </Button>
        )}
        {props.btn2 &&
          (props.confirmAction === true ? (
            <ConfirmSpending
              buttonLabel={props.btn2Text}
              confirmAction={props.btn2}
              disabled={!props.is_valid}
            />
          ) : (
            <Button onClick={props.btn2} disabled={!props.is_valid}>
              {props.btn2Text}
            </Button>
          ))}
        {props.btn3 &&
          (props.confirmAction === true ? (
            <ConfirmSpending
              buttonLabel={props.btn3Text}
              confirmAction={props.btn3}
              disabled={!props.is_valid}
              id="toggler"
            />
          ) : (
            <Button onClick={props.btn3} disabled={!props.is_valid}>
              <span id="toggler">{props.btn3Text}</span>
            </Button>
          ))}
        {props.btn4 && (
          <Button onClick={() => props.btn4(props.id)}>{props.btn4Text}</Button>
        )}
      </CardFooter>

      {props.btn3Hover && (
        <UncontrolledTooltip placement="right" target="toggler">
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
