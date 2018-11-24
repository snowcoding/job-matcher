import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { Button, Form, FormGroup, Label, CustomInput } from "reactstrap";
import Api from "../../../api";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    console.log(token);

    // send the token to server here.
    await Api.endpoints
      .charge(token.id)
      .then(response => {
        console.log(response);
        console.log("Purchase Complete!");
        this.setState({ complete: true });
      })
      .catch(error => {
        console.log(error);
      });
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
