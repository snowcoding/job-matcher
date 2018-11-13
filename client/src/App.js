import React, { Component } from "react";
import { Route } from "react-router-dom";
import Auth from "./features/auth/component";

import "./App.css";
import Landing from "./layouts/Landing";
import "bootstrap/dist/css/bootstrap.min.css";

import Billing from "./Billing/Billing";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={Landing} />
        <Route path="/billing" component={Billing} />
      </div>
    );
  }
}

export default App;
