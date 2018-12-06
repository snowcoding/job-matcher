import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "assets/css/black-dashboard-react.css";
import "assets/css/nucleo-icons.css";
// import Layout from "./Layout/Layout";
import AdminLayout from "layouts/Admin/Admin.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Layout />  */}
        <Switch>
          <Route path="/" render={props => <AdminLayout {...props} />} />
        </Switch>
        <ToastContainer transition={Slide} />
      </div>
    );
  }
}

export default App;
