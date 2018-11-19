import React, { Component } from "react";
import Education from "../components/Form_Education";

class EducationContainer extends Component {
	state = {
		date: [new Date(), new Date()]
	};

	onChange = date => this.setState({ date });

	render() {
		return <Education onChange={this.onChange} value={this.state.date} />;
	}
}

export default EducationContainer;
