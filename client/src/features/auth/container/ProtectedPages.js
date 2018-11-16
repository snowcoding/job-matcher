import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
const ProtectedPages = ChildComponent => {
	class ProtectedChildComponent extends Component {
		render() {
			let render = this.props.is_authenticated ? (
				<ChildComponent {...this.props} />
			) : (
				<Redirect to="/auth/login" />
			);
			return render;
		}
	}
	const MapPropsToState = state => ({
		is_authenticated: localStorage.getItem("token") ? true : false
	});

	return connect(MapPropsToState)(ProtectedChildComponent);
};
export default ProtectedPages;
