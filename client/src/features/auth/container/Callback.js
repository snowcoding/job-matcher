import React, { Component } from "react";

class Callback extends Component {
	render() {
		const style = { fontSize: "40px" };
		console.log(this.props);
		return (
			<div style={style}>
				{/* <img src={loading} alt="loading" /> */}
				<h1> call back </h1>
			</div>
		);
	}
}

export default Callback;
