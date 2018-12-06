import React, { Component } from "react";
import { connect } from "react-redux";
import { CardElement, injectStripe } from "react-stripe-elements";
import { Button, Form, FormGroup, Label, CustomInput } from "reactstrap";
import { billUser } from "../store/action";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    };
    this.submit = this.submit.bind(this);
  }

  updateItemSelected = e => {
    this.setState({ item: e.target.value });
  };
  async submit() {
    let { token } = await this.props.stripe.createToken({
      user_id: this.props.currentUser.id,
      name:
        this.props.currentUser.first_name +
        " " +
        this.props.currentUser.last_name
    });
    console.log(token);
    this.props.billUser({ token, item: this.state.item });
  }

  render() {
    console.log("Billing:", this.props);
    if (this.props.complete) return <h1>Purchase Complete!</h1>;
    return (
      <Form>
        <FormGroup>
          <Label>Payment info</Label>
          <CardElement />
        </FormGroup>
        <FormGroup onChange={this.updateItemSelected}>
          <div>
            <CustomInput
              type="radio"
              name="item"
              id="exampleCustomradio"
              label="100 Credits - $9.99"
              value="CREDIT100"
            />
            <CustomInput
              type="radio"
              name="item"
              id="exampleCustomradio2"
              label="5 Credits - $0.99"
              value="CREDIT5"
            />
            {this.props.currentUser && this.props.currentUser.is_employer ? (
              <CustomInput
                type="radio"
                name="item"
                id="exampleCustomCheckbox3"
                label="Post Job - $9.99"
                value="POSTING1"
              />
            ) : null}
          </div>
        </FormGroup>
        <FormGroup>
          <Button onClick={this.submit}>Buy Now</Button>{" "}
        </FormGroup>
      </Form>
    );
  }
}

// export default injectStripe(CheckoutForm);

const MapStateToProps = state => ({
  data: state.billing.data,
  complete: state.billing.complete,
  errors: state.billing.errors,
  currentUser: state.user.currentUser
  // FETCHING_GET_PROFILE: state.randomUser.FETCHING_GET_PROFILE
});
export default injectStripe(
  connect(
    MapStateToProps,
    { billUser }
  )(CheckoutForm)
);
