import React, { Component } from "react";
import "./App.css";
import Layout from "./Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Layout />
        </header>
      </div>
    );
  }
}

export default App;
