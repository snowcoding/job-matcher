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
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			confirmPassword: '',
		};
		this.handleChange = this.handleChange.bind(this);
	}

	// handle async and await changes to the email
	handleChange = async event => {
		const { target } = event;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const { name } = target;
		await this.setState({ [name]: value });
	};

	// click event for sign-up button
	//TODO: Find a way to get page to refresh or reload after submission
	clickHandler(e) {
		e.preventDefault();
		// window.location.reload();
		console.log('YOU HAVE SUCCESSFULLY SIGN-IN');
	}

	render() {
		return (
			<Container className='Signin'>
				<h2>Sign In</h2>
				<Form className='form'>
					<Col>
						<FormGroup>
							<Label>Email</Label>
							<Input
								type='email'
								name='email'
								id='exampleEmail'
								placeholder='myemail@email.com'
								onChange={e => {
									this.handleChange(e);
								}}
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
								value={this.password}
								onChange={e => {
									this.handleChange(e);
								}}
							/>
						</FormGroup>
					</Col>
					<FormGroup check>
						<Input type='checkbox' name='check' id='exampleCheck' />
						<Label for='exampleCheck' check>
							Is Seeker
						</Label>
					</FormGroup>
					<Button onClick={this.clickHandler}>Sign-In</Button>
				</Form>
			</Container>
		);
	}
}

export default Signin;
