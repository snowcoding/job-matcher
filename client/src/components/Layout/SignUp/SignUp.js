import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class SignUp extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder="..." />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="..."
          />
        </FormGroup>

        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="..."
          />
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Account Type</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="accountType" /> Job Seeker
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input type="radio" name="accountType" /> Employer
            </Label>
          </FormGroup>
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}
