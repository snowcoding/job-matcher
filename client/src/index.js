import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider
		store={createStore(function() {
			return {};
		})}>
        <Router>
		    <App />
        </Router>
	</Provider>,
	document.getElementById('root'),
);

