import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout/Layout";
import { ToastContainer, Slide } from "react-toastify";
import { connect } from "react-redux";

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
