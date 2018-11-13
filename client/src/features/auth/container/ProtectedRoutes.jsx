import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class ProtectedRoutes extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let render = this.props.is_authenticated ? (
			this.props.children
		) : (
			<Redirect to="/auth/login" />
		);
		return render;
	}
}
const MapPropsToState = state => ({
	is_authenticated: state.user.currentUser ? true : false
});
export default connect(MapPropsToState)(ProtectedRoutes);
