import React, { Component } from "react";
import Input from "../component/Input";
import zxcvbn from "zxcvbn";
import LinkedIn from "./LinkedIn";
// import anime from "animejs";

// redux
import { connect } from "react-redux";
import { signUpUser, login } from "../store/action";
import { Route, Redirect } from "react-router-dom";

// css
import "../component/auth.css";
class Auth extends Component {
  state = {
    name: {
      type: "text",
      id: "name",
      value: "",
      required: true,
      placeholder: "Full name",
      name: "name",
      controlClass: "form-control",
      label: "Full name",
      touch: false,
      valid: false,
      errors: [],
      validation: {}
    },
    email: {
      type: "text",
      id: "email",
      value: "",
      required: true,
      placeholder: "Email",
      name: "email",
      controlClass: "form-control",
      label: "Email",
      touch: false,
      valid: false,
      errors: [],
      validation: {}
    },
    password: {
      type: "password",
      id: "password",
      value: "",
      required: true,
      placeholder: "Password",
      name: "password",
      controlClass: "form-control",
      label: "Password",
      touch: false,
      errors: [],
      valid: false,
      validation: {
        strength: 0,
        minLength: 7
      }
    },

    password2: {
      type: "password",
      id: "password2",
      value: "",
      required: true,
      placeholder: "Password",
      name: "password2",
      label: "Password",
      touch: false,
      controlClass: "form-control",
      errors: [],
      valid: false,
      validation: {
        strength: 0,
        minLength: 7
      }
    },
    is_seeker: {
      type: "checkbox",
      value: false,
      required: true,
      placeholder: "radio",
      name: "is_seeker",
      label: "Are You Employer?",
      id: "ProtectedPages",
      touch: false,
      controlClass: "form-control",
      errors: [],
      valid: false,
      validation: {
        strength: 0,
        minLength: 7
      }
    },
    formValid: false,
    signIn: false
  };

  inputHandler = event => {
    let updateState = {
      ...this.state
    };
    let stateName = event.target.name;
    let isValid = true;
    updateState[stateName].value = event.target.value;
    //check whether the input have been touch, help to check validation
    updateState[stateName].touch = true;

    // validate each input based on its type
    if (stateName === "password" || stateName === "password2") {
      // check the strength of the input value, and update the validation
      let result = this.passwordValidetor(event.target.value);

      if (result[1] >= 3) {
        updateState[stateName].valid = true;
        updateState[stateName].errors = [];
        isValid = true;
      } else {
        updateState[stateName].errors.push(result[0]);
        updateState[stateName].valid = false;
        isValid = false;
      }
      //update strength of the password
      updateState[stateName].validation.strength = result[1];
    }
    if (stateName === "password2") {
      // handle miss match passwords
      if (updateState.password.value !== event.target.value) {
        updateState[stateName].errors.push("miss match password");
        isValid = false;
        updateState[stateName].valid = false;
      } else {
        isValid = true;
        updateState[stateName].valid = true;
        updateState[stateName].errors = [];
      }
    }
    if (stateName === "name") {
      // handle correct name
      if (this.validateFullname(event.target.value)) {
        isValid = true;
        updateState[stateName].valid = true;
        updateState[stateName].errors = [];
      } else {
        updateState[stateName].errors.push("Please Enter Full Name");
        isValid = false;
        updateState[stateName].valid = false;
      }
    }
    if (stateName === "email") {
      // validate email
      if (this.validateEmail(event.target.value)) {
        isValid = true;
        updateState[stateName].valid = true;
        updateState[stateName].errors = [];
      } else {
        updateState[stateName].errors.push("Please Enter valid Email address");
        isValid = false;
        updateState[stateName].valid = false;
      }
    }
    if (stateName === "is_seeker") {
      updateState[stateName].value = event.target.checked;
    }
    // if all input type are valid, we enable the button to register or login

    // check if passwords are the same during registration

    updateState.formValid = isValid;

    this.setState({
      ...updateState
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    let isValid = this.state.email.valid && this.state.password.valid;
    // !this.state.name.touch &&
    // this.state.name.valid;
    let { name, email, password, is_seeker } = this.state;
    if (isValid) {
      this.props.location.pathname.includes("login")
        ? this.props.login({
            email: email.value,
            password: password.value
          })
        : this.props.signUpUser(
            {
              first_name: name.value.split(" ")[0],
              last_name: name.value.split(" ")[1],
              email: email.value,
              password: password.value,
              is_seeker: is_seeker.value ? false : true
            },
            () => {
              if (this.props.currentUser !== null) {
                this.props.history.push("/");
              }
            }
          );
    }
    // this.setState({
    // 	passwordError: result[0],
    // 	passwordStrength: result[1]
    // });
  };

  passwordValidetor = password => {
    const isEmpity = password.length > 0;
    let score = zxcvbn(password).score;
    let error = [];
    if (!isEmpity) {
      error.push("Password is required");
    } else if (password.length < 6) {
      error.push("Length should be more than 6");
    } else if (score < 3) {
      error.push(`Password is weak : ${score}`);
    } else if (score >= 3) {
      error = [];
    }
    return [error, score];
  };
  validateFullname = value => {
    const regex = /^[a-z]{2,}(\s[a-z]{2,})+$/i;
    return regex.test(value);
  };
  validateEmail = value => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  };

  render() {
    let btn_name = this.props.location.pathname.includes("login")
      ? "Login"
      : "Register";

    let controledClass = this.state.formValid ? "btn" : "btn disabled";
    let arr = Object.entries(this.state);
    let registerElements = arr.map((i, idx, arr) => (
      <Input
        key={i[0]}
        {...i[1]}
        button="Register"
        onChange={e => this.inputHandler(e, i[0])}
      />
    ));
    let loginElements = arr.map((i, idx, arr) =>
      idx === 0 || i[0] === "password2" ? null : (
        <Input
          key={i[0]}
          {...i[1]}
          button="Login"
          onChange={e => this.inputHandler(e, i[0])}
        />
      )
    );
    // console.log(this.state.is_seeker);
    return !this.props.authenticatoin_succeed ? (
      <form onSubmit={this.handleSubmit} className="main-form-container">
        {this.props.error && <p> {this.props.error} </p>}
        <Route path="/auth/login" exact render={props => loginElements} />
        <Route path="/auth/register" exact render={props => registerElements} />
        <span className="d-block form-hint">
          To conform with our Strong Password policy, you are reqired to use a
          sufficiently strong password.Password must be more than{" "}
          {this.state.password.validation.minLength} characters.
        </span>
        <button type="submit" className={controledClass + " mt-l"}>
          {btn_name}
        </button>
        <LinkedIn />
        {this.props.fetching && <p> authenticating </p>}
      </form>
    ) : (
      <Redirect to="/" />
    );
  }
}
const MapStateToProps = state => ({
  fetching: state.user.fetching,
  currentUser: state.user.currentUser,
  error: state.user.error,
  authenticatoin_succeed: state.user.authenticatoin_succeed
});
export default connect(
  MapStateToProps,
  {
    signUpUser,
    login
  }
)(Auth);
