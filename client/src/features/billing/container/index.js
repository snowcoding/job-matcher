import React, { Component } from "react";
import { connect } from "react-redux";
import { CardElement, injectStripe } from "react-stripe-elements";
import { Button, Form, FormGroup, Label, CustomInput } from "reactstrap";
import { billUser } from "../store/action";

// class BrowseContainer extends Component {
//   getRandomUserS = () => {
//     this.props.getRandomUser("seeker");
//   };
//   getRandomUserE = () => {
//     this.props.getRandomUser("employer");
//   };

//   render() {
//     return (
//       <BrowseElement
//         data={this.props.data}
//         onClick={[this.getRandomUserE, this.getRandomUserS]}
//       />
//     );
//   }
// }

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    // this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // find a way to send token to action
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    console.log(token);
    this.props.billUser(token);
    // send the token to server here.
    // await Api.endpoints
    //   .charge(token.id)
    //   .then(response => {
    //     console.log(response);
    //     console.log("Purchase Complete!");
    //     this.setState({ complete: true });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
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
            {this.props.currentUser && this.props.currentUser.is_employer ? (
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox3"
                label="Post Job - $9.99"
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
