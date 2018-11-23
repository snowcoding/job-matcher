import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { Button, Form, FormGroup, Label, CustomInput } from "reactstrap";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    // send the token to server here.
    let response = await fetch("http://127.0.0.1:8000/api/v1/charge/", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    // Test response here.
    console.log(token);
    console.log(response);
    if (response.ok) console.log("Purchase Complete!");
    if (response.ok) this.setState({ complete: true });
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete!</h1>;
    return (
      <Form>
        <FormGroup>
          <Label>Payment info</Label>
          <CardElement />
        </FormGroup>

        <FormGroup>
          <div>
            <CustomInput
              type="checkbox"
              id="exampleCustomCheckbox"
              label="100 Credits - $9.99"
            />
            <CustomInput
              type="checkbox"
              id="exampleCustomCheckbox2"
              label="5 Credits - $0.99"
            />
            <CustomInput
              type="checkbox"
              id="exampleCustomCheckbox3"
              label="Post Job - $9.99"
              disabled
            />
          </div>
        </FormGroup>
        <FormGroup>
          <Button onClick={this.submit}>Buy Now</Button>{" "}
        </FormGroup>
      </Form>
    );
  }
}

export default injectStripe(CheckoutForm);
