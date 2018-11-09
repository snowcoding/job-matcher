import React, { Component } from 'react';
import {
	Col,
	Container,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
} from 'reactstrap';

class Signin extends Component {
	render() {
		return (
			<Container className="Signin">
				<h2>Sign In</h2>
				<Form className="form">
					<Col>
						<FormGroup>
							<Label>Email</Label>
							<Input
								type="email"
								name="email"
								id="exampleEmail"
								placeholder="myemail@email.com"
							/>
						</FormGroup>
					</Col>
					<Col>
						<FormGroup>
							<Label for="examplePassword">Password</Label>
							<Input
								type="password"
								name="password"
								id="examplePassword"
								placeholder="********"
							/>
						</FormGroup>
					</Col>
					<FormGroup check>
						<Input type="checkbox" name="check" id="exampleCheck" />
						<Label for="exampleCheck" check>
							Is Seeker
						</Label>
					</FormGroup>
					<Button>Sign-In</Button>
				</Form>
			</Container>
		);
	}
}

export default Signin;
