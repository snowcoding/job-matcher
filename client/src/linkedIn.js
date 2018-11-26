import LinkedinSDK from "./features/auth/linkedIn/LinkedIn";
import React from "react";
import Api from "./api";

class MyComponent extends React.Component {
  responseLinkedin(response) {
    console.log("linkedIn component", response);
    let user = {
      first_name: response.firstName,
      last_name: response.lastName,
      email: response.emailAddress,
      password: "9712225622"
    };
    Api.endpoints
      .signUp("seeker", user)
      .then(result => {
        console.log("linkedin result ", { result });
      })
      .catch(error => {
        let testText = "This email has been taken by someone else";
        console.log("you have already email, signin.....", { error });
        if (
          error.response.data.email &&
          error.response.data.email[0].includes(testText)
        ) {
          console.log("your username and password.....", {
            username: user.email,
            password: user.password
          });

          Api.endpoints
            .signIn({ username: user.email, password: user.password })
            .then(result => {
              console.log("internal sever SignIn access tokem,", { result });
            })
            .catch(error => {
              console.log("internal sever coulndt veriy your account ", {
                error
              });
            });
        } else {
          console.log("linkedin failed to verify your account ", { error });
        }
      });
  }

  render() {
    return (
      <LinkedinSDK
        clientId="86k7v2sks14nul"
        callBack={this.responseLinkedin}
        fields=":(id,firstName,lastName,email-address,num-connections,picture-urls::(original))"
        className={"className"}
        loginButtonText={"Login with Linkedin component"}
        logoutButtonText={"Logout from Linkedin"}
        buttonType={"button"}
        getOAuthToken={true}
      />
    );
  }
}

export default MyComponent;
