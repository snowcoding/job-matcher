import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { SigninPage } from '../SigninPage';

class App extends React {
	render() {
		const { alert } = this.props;
		return (
			<div className="container">
				<div>
					{alert.message && (
						<div className={`alert ${alert.type}`}>{alert.message}</div>
					)}
					<Router>
						<div>
							<Route path="/signin" component={SigninPage} />
						</div>
					</Router>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { alert } = state;
	return {
		alert,
	};
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
