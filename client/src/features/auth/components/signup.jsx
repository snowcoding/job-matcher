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

class Signup extends Component {
	render() {
		return (
			<Container className='Signup'>
				<h2>Sign Up</h2>
				<Form className='form'>
					<Col>
						<FormGroup>
							<Label>First Name</Label>
							<Input
								type='text'
								name='text'
								id='exampleText'
								placeholder='First Name'
							/>
						</FormGroup>
						<FormGroup>
							<Label>Last Name</Label>
							<Input
								type='text'
								name='text'
								id='exampleText'
								placeholder='Last Name'
							/>
						</FormGroup>
						<FormGroup>
							<Label>Email</Label>
							<Input
								type='email'
								name='email'
								id='exampleEmail'
								placeholder='myemail@email.com'
							/>
						</FormGroup>
					</Col>
					<Col>
						<FormGroup>
							<Label for='examplePassword'>Password</Label>
							<Input
								type='password'
								name='password'
								id='examplePassword'
								placeholder='********'
							/>
						</FormGroup>
						<FormGroup>
							<Label for='examplePassword'>Confirm Password</Label>
							<Input
								type='password'
								name='password'
								id='examplePassword'
								placeholder='********'
							/>
						</FormGroup>
					</Col>
					<FormGroup check>
						<Input type='checkbox' name='check' id='exampleCheck' />
						<Label for='exampleCheck' check>
							Is Seeker
						</Label>
					</FormGroup>
					<Button>Sign-Up</Button>
				</Form>
			</Container>
		);
	}
}
export default Signup;
