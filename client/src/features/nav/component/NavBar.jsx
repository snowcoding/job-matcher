import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { logOut } from "../../auth/store/action";
import {
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleSignOut = (e) => {
    e.preventDefault();
    this.props.onLogOut();
  };
  render() {
    console.log("User:", this.props);
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavLink to="/" activeStyle={{
                            fontWeight: "bold",
                            textDecoration: 'none',
                            color: "#4D4D4D",
                          }}>Job Matcher</NavLink>
          { this.props.authenticatoin_succeed &&
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/components/" activeStyle={{
                                            margin: "2px",
                }}>Free Apps: </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="give a path" activeStyle={{
                                        margin: "2px",
                  }}>Balance credits: </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to ="/">
                        Home
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/profile">
                        My Profile
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/Matches">
                        Matches
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/Messages">
                        Messages
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/Billing">
                        Billing
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to ="/" onClick={this.handleSignOut}>Sign Out</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          }
        </Navbar>
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
        ...state.user
    };
}

const mapDispatchToProps = dispatch => ({
  onLogOut: (user) => {
    dispatch(logOut());
  },
});


const ConnectedNavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default class Wrapper extends React.Component {
    render(){
       return (<ConnectedNavBar />);
    }
}
