import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

class Billing extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_cBTAEriVzEf6Qiniho2pKzuj">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Billing;
