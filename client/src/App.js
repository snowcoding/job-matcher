import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/css/black-dashboard-react.css";
import "assets/css/nucleo-icons.css";
import Layout from "./Layout/Layout";
import { ToastContainer, Slide } from "react-toastify";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
        <ToastContainer transition={Slide} />
      </div>
    );
  }
}

export default App;
