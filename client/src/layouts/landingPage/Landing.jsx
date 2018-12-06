import React from "react";
import "./index.css";
import {
  LandingDiv,
  StyledLink,
  CenterDiv,
  LandingHeading
} from "./landingPageCss";
import styled, { keyframes } from "styled-components";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../features/auth/store/action";
const StyledMenu = styled.div`
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.125);
  padding: 4px 15px;
  color: white;
  font-size: 16px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-family: Raleway, Helvetica, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  i {
    float: right;
  }
  &:hover {
    text-decoration: none;
  }
`;
const StyledH2 = styled.h2`
  border-bottom: solid 2px rgba(255, 255, 255, 0.125);
  font-size: 2.25em;
  margin-bottom: 25px;
  padding-bottom: 14px;
  color: #ffffff;
  font-family: Raleway, Helvetica, sans-serif;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin: 0 0 1em 0;
  text-transform: uppercase;
`;
const StyledP = styled.p`
    font-family: Raleway, Helvetica, sans-serif;
    font-size: 10px;
    font-weight: 200;
    letter-spacing:5px
    line-height: 2;
    text-transform: uppercase;
    font-size: 14px;
`;
const StyledDivLogo = styled.div`
  margin-bottom: 20px;
  i {
    border-radius: 100%;
    border: solid 2px rgba(255, 255, 255, 0.125);
    cursor: default;
    display: inline-block;
    font-size: 40px;
    height: 2.25em;
    line-height: 2.25em;
    text-align: center;
    width: 2.25em;
  }
`;
const zoomIn = keyframes`
  0%{
    opacity: 0;
    transform: scale(0.7);
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
`;
const Menu = styled.div`
  width: 400px;
  padding: 20px;
  background-color: #042163
  margin: auto;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  animation: ${zoomIn} 3s;
  input{
    display: block;
    padding: 5px 15px 5px 5px;
    font-size: 14px;
    margin: 10px auto;
    width: 80%;
    border: none;
  }
`;
class Landing extends React.Component {
  state = {
    is_menuOpen: false,
    email: "",
    password: ""
  };
  onChangeHanlder = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  toggleMenu = e => {
    this.setState({
      is_menuOpen: !this.state.is_menuOpen
    });
  };
  onSubmitHandler = e => {
    e.preventDefault();
    console.log("onsubmit clicked");
    this.props.login({
      username: this.state.email,
      password: this.state.password
    });
  };
  render() {
    if (this.props.authenticatoin_succeed) return <Redirect to="/view" />;
    return (
      <React.Fragment>
        <LandingDiv is_menuOpen={this.state.is_menuOpen}>
          <StyledMenu onClick={this.toggleMenu}>Sign Up | Sign In</StyledMenu>
          <CenterDiv>
            <section id="banner">
              <div className="inner">
                <StyledDivLogo className="logo">
                  <i className="fas fa-binoculars">{""}</i>
                </StyledDivLogo>
                <StyledH2>This is Seek Geek</StyledH2>
                <StyledP>Another full stack application by </StyledP>
              </div>
            </section>
          </CenterDiv>
        </LandingDiv>
        {this.state.is_menuOpen && (
          <Menu>
            <form onSubmit={this.onSubmitHandler}>
              <input
                type="text"
                onChange={this.onChangeHanlder}
                value={this.state.email}
                name={"email"}
                placeholder={"email"}
              />
              <input
                type="password"
                onChange={this.onChangeHanlder}
                value={this.state.password}
                name={"password"}
                placeholder={"password"}
              />
              <input type="submit" value={"save"} />
            </form>
          </Menu>
        )}
      </React.Fragment>
    );
  }
}

const MapPropsToState = state => ({
  authenticatoin_succeed: state.user.authenticatoin_succeed
});
export default connect(
  MapPropsToState,
  { login }
)(Landing);
