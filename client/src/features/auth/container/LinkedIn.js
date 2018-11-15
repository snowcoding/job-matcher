import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class LinkedIn extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	openPop = e => {
		const width = 600,
			height = 600;
		const left = window.innerWidth / 2 - width / 2;
		const top = window.innerHeight / 2 - height / 2;
		const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86k7v2sks14nul&redirect_uri=http://localhost:3000/testing&state=987654321&scope=r_basicprofile`;
		return window.open(
			url,
			"",
			`toolbar=no, location=no, directories=no, status=no, menubar=no, 
        scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
        height=${height}, top=${top}, left=${left}`
		);
	};

	startAuth = () => {
		this.open = this.openPop();
		console.log(this.open);
	};

	componentWillUnmount = () => {
		// this.open.close();
	};
	render() {
		// console.log(this.props);
		return <div onClick={this.startAuth}>Linked in</div>;
	}
}

export default withRouter(LinkedIn);
