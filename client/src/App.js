import React, { Component } from "react";
<<<<<<< HEAD
import { Route, Switch } from "react-router-dom";
import Auth from "./features/auth/container/Auth";
import ProtectedPages from "./features/auth/container/ProtectedPages";
import Testing from "./features/testing/container";
import NavBar from "./features/nav/component/NavBar.jsx";
||||||| merged common ancestors
import { Route, Switch } from "react-router-dom";
import Auth from "./features/auth/component/Auth";
import ProtectedPages from "./features/auth/container/ProtectedPages";
import Testing from "./features/testing/container";
import NavBar from "./features/nav/component/NavBar.jsx"
=======
>>>>>>> master
import "./App.css";
<<<<<<< HEAD
import Landing from "./layouts/landingPage/Landing";
||||||| merged common ancestors
import Landing from "./layouts/Landing";
=======
>>>>>>> master
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout/Layout";

class App extends Component {
<<<<<<< HEAD
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
||||||| merged common ancestors

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
=======
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
>>>>>>> master
}

export default App;
