import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./features/auth/component/Auth";
import ProtectedRoutes from "./features/auth/container/ProtectedRoutes";
import Testing from "./features/testing/container";

import "./App.css";
import Landing from "./layouts/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route path="/auth" component={Auth} />
					<Route path="/" exact component={Landing} />
					<ProtectedRoutes>
						<Route path="/testing" exact component={Testing} />
					</ProtectedRoutes>
				</Switch>
			</div>
		);
	}
}

export default App;
