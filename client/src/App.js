import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "assets/css/black-dashboard-react.css";
import "assets/css/nucleo-icons.css";
import Landing from "./layouts/landingPage/Landing";
import AdminLayout from "layouts/Admin/Admin.jsx";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props =>
            !this.props.authenticatoin_succeed ? (
              <Landing {...props} />
            ) : (
              <AdminLayout {...props} />
            )
          }
        />
        <ToastContainer transition={Slide} />
      </div>
    );
  }
}

const MapPropsToState = state => ({
  authenticatoin_succeed: state.user.authenticatoin_succeed
});
export default connect(MapPropsToState)(App);
