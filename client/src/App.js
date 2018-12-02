import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/blk-design-system.css";
// import "./assets/css/nucleo-icons.css";
import Layout from "./Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default App;
