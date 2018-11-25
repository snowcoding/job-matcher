import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class Testing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getToken = code => {
    let url = "https://www.linkedin.com/oauth/v2/accessToken/";
    let url2 = `${url}grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/testing&client_id=86k7v2sks14nul&client_secret=ReTh3IF86BjNKUAZ`;
    axios({
      method: "post",
      url: url2,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(response => {
        console.log({ response });
      })
      .catch(error => {
        console.log({ error });
      });
  };
  QueryStringToJSON = () => {
    var pairs = this.props.location.search.slice(1).split("&");

    var result = {};
    pairs.forEach(function(pair) {
      pair = pair.split("=");
      result[pair[0]] = decodeURIComponent(pair[1] || "");
    });

    return JSON.parse(JSON.stringify(result));
  };

  componentDidMount = () => {
    var query_string = this.QueryStringToJSON();
    this.getToken(query_string.code);
    // search = JSON.parse(search);
    console.log(query_string);
  };
  render() {
    console.log(this.props);
    return (
      <nav>
        <ul>
          <li>home</li>
          <li>job</li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Testing);
