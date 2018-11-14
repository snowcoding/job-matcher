// import React from "react";

// const Nav = () => {
// 	return (
// 		<nav>
// 			<ul>
// 				<li>home</li>
// 				<li>job</li>
// 			</ul>
// 		</nav>
// 	);
// };

// export default Nav;
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class NavBar extends Component {
    render() {
  const user = this.props.authentication.user;

        return (
            <div>
                {user && user.firstName &&
                    <h3>Signed in as: <Link to="/">{user.firstName}</Link></h3>
				}
				<h2> Free Apps: 3 </h2>
				<h2> Balance credits: 3 </h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    return {
        authentication
    };
}

const connectedNavBar = connect(mapStateToProps)(NavBar);
export { connectedNavBar as NavBar };
