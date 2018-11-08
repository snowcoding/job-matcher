import React, { Component } from 'react';
import Auth from './features/auth/components/index';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Auth />
			</div>
		);
	}
}

export default App;
