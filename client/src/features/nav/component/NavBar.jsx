import React from "react";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleSignOut = () => {
    //Auth.logout();
  };
  render() {
    // const user = this.props.authentication.user;
    console.log("User", this.props);
    // const user = this.props.authentication && this.props.authentication.user;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Job Matcher</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {/* {user &&  */}
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Free Apps: </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="give a path">Balance credits: </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a href="/">Home</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="/MyProfile">My Profile</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="/Matches">Matches</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="/Messages">Messages</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="/Billing">Billing</a>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    {/* {!this.props.authentication.user ?
                    <a href="/login">Sign In</a> :
                    <a href="/" onClick={this.handleSignOut}>Sign Out</a>
                  } */}
                    Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            {/* } */}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authentication } = state;
  return {
    authentication
  };
}

const ConnectedNavBar = connect(mapStateToProps)(NavBar);

export default class Wrapper extends React.Component {
  render() {
    return <ConnectedNavBar />;
  }
}
