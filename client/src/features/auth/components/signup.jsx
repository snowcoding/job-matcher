import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Signup extends Component {
	render() {
		return (
			<Form>
				<Row form>
					<Col md={6}>
						<FormGroup>
							<Label for="exampleText">First Name</Label>
							<Input
								type="text"
								name="text"
								id="exampleText"
								placeholder="with a placeholder"
							/>
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<Label for="exampleText">Last Name</Label>
							<Input
								type="text"
								name="text"
								id="exampleText"
								placeholder="with a placeholder"
							/>
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<Label for="exampleEmail">Email</Label>
							<Input
								type="email"
								name="email"
								id="exampleEmail"
								placeholder="with a placeholder"
							/>
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<Label for="examplePassword">Password</Label>
							<Input
								type="password"
								name="password"
								id="examplePassword"
								placeholder="password placeholder"
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup check>
					<Input type="checkbox" name="check" id="exampleCheck" />
					<Label for="exampleCheck" check>
						Is Seeker
					</Label>
				</FormGroup>
				<FormGroup check>
					<Input type="checkbox" name="check" id="exampleCheck" />
					<Label for="exampleCheck" check>
						Is Employer
					</Label>
				</FormGroup>
				<Button>Sign Up</Button>
			</Form>
		);
	}
}
export default Signup;
