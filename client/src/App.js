import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./features/auth/container/Auth";
import ProtectedPages from "./features/auth/container/ProtectedPages";
import Testing from "./features/testing/container";
import NavBar from "./features/nav/component/NavBar.jsx";
import "./App.css";
import Landing from "./layouts/landingPage/Landing";
import "bootstrap/dist/css/bootstrap.min.css";

import Billing from "./Billing/Billing";
class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<Switch>
					<Route path="/auth" component={Auth} />

					<Route path="/" exact component={Landing} />
					<Route path="/billing" component={Billing} />
					<Route
						path="/testing"
						exact
						component={ProtectedPages(Testing)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
