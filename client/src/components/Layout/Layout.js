import React from "react";
import { Container } from "reactstrap";
import { Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SignUp from "./SignUp/SignUp";

export default class Layout extends React.Component {
  render() {
    return (
      <Container>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignUp} />
      </Container>
    );
  }
}
