import React, { Component, Fragment } from 'react';
//Fragments let you group a list of children without adding extra nodes to the DOM
import { slide as Menu } from 'react-burger-menu';
//import jwt token validation 

class HamburgerMenu extends Component {
    handleSignOut = () => {
      //call signout
    }
    render() {
        return (
            <Menu {...this.props}>
            <a className="navbar-item" href="/">
            Home
            </a>
  
            {this.props.isLoggedIn ? // check validity of jwt token
            <a className="navbar-item" href="/MyProfile">
            My Profile
            </a> : <Fragment />
            }

            {this.props.isLoggedIn ?
            <a className="navbar-item" href="/Matches">
            Matches
            </a> : <Fragment />
            }

            {this.props.isLoggedIn ?
            <a className="navbar-item" href="/Messages">
            Messages
            </a> : <Fragment />
            }

            {this.props.isLoggedIn ?
            <a className="navbar-item" href="/Billing">
            Billing
            </a> : <Fragment />
            }

        {this.props.isLoggedIn ?
        <a className="navbar-item" href="/Settings">
          Settings
        </a> : <Fragment />
        }

        {!this.props.isLoggedIn ?
          <a className='navbar-item' href="/login">Sign In</a> :
          <a className="navbar-item" href="/" onClick={this.handleSignOut}>Sign Out</a>
        }
      </Menu>

        );
    }
};
export default HamburgerMenu;