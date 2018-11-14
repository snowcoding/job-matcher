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
//import { Navbar } from 'reactstrap';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

class NavBar extends Component {
    render() {
        const user = this.props.authentication.user;
        if (user) {
                return (
                    <div>
                        <Link to='/' className="Brand-logo"> Job Matcher</Link>
                        {/* {user && user.firstName &&
                            <h3>Signed in as: <Link to="/">{user.firstName}</Link></h3>
                        } */}
                                <h2> Free Apps: 3 </h2>
                                <h2> Balance credits: 3 </h2>
                                <HamburgerMenu />
                    </div>
                )
            }
        else {
            return (
                <div>
                    <Link to='/' className="Brand-logo"> Job Matcher</Link>
                    <h3>Sign in</h3>
                    <h3>Sign up</h3>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    return {
        authentication
    };
}

// const connectedNavBar = connect(mapStateToProps)(NavBar);
// export { connectedNavBar as NavBar };
export default  NavBar;