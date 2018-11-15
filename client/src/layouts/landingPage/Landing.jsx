import React from "react";
import "./index.css";
// import { Jumbotron } from "reactstrap";
import { LandingDiv, StyledLink, CenterDiv } from "./landingPageCss";
// import LandingPageSvg from "./LandingPageSvg";

const Landing = props => {
	return (
		<LandingDiv>
			<h1>Job Matcher</h1>
			<CenterDiv>
				<StyledLink to="/auth/login"> Login </StyledLink>
				<StyledLink to="/auth/register"> Register </StyledLink>
			</CenterDiv>
		</LandingDiv>
	);
};

export default Landing;
