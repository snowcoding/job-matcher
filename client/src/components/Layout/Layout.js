import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Route } from 'react-router-dom';

export default class Layout extends React.Component {
  render() {
    return (<Container>
            <Route exact path="/" component={LandingPage}/>
      <Route path="/signup" component={SignUp}/>
    </Container>
    );
  }
}
