import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./features/auth/container/Auth";
// import Login from "./features/auth/container/Loginin";
import ProtectedPages from "./features/auth/container/ProtectedPages";
import Testing from "./features/testing/container";

import "./App.css";
import Landing from "./layouts/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth0 from "./features/auth/container/Auth0";
import history from "./features/auth/container/History";

class App extends Component {
	render() {
		const auth = new Auth0();

		return (
			<div className="App">
				<Switch>
					{/* <Route
						path="/auth"
						render={e => (
							<Login {...e} auth={auth} history={history} />
						)}
					/> */}
					<Route path="/auth" component={Auth} />

					<Route path="/" exact component={Landing} />

					<Route path="/testing" exact component={Testing} />
				</Switch>
			</div>
		);
	}
}

export default App;
