import React from "react";
import "./index.css";
import {
  LandingDiv,
  StyledLink,
  CenterDiv,
  LandingHeading
} from "./landingPageCss";

const Landing = props => {
  return (
    <LandingDiv>
      <LandingHeading>Job Matcher</LandingHeading>
      <CenterDiv>
        <StyledLink to="/auth/login"> Login </StyledLink>
        <StyledLink to="/auth/register"> Register </StyledLink>
      </CenterDiv>
    </LandingDiv>
  );
};

export default Landing;
