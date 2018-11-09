import React, { Component } from "react";
import { Route } from "react-router-dom";
import Auth from "./features/auth/container";

import "./App.css";
import Landing from "./layouts/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
	render() {
		return (
			<div className="App">
				<Route path="/auth" component={Auth} />
				<Route path="/" exact component={Landing} />
			</div>
		);
	}
}

export default App;
