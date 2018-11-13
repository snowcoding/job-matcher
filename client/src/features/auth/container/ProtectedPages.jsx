import React from "react";
import Redirect from "react-router-dom";
const ProtectedPages = (ChildComponent, state) => {
	return class extends Component {
		render() {
			let render = state.is_authenticated ? (
				<ChildComponent {...this.props} />
			) : (
				<Redirect to="/auth/login" />
			);

			return render;
		}
	};
};
export default ProtectedPages;
