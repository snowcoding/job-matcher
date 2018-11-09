import React, { Component } from 'react';
import {
	Col,
	Container,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormFeedback,
} from 'reactstrap';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
			validate: {
				emailState: '',
			},
		};
		this.handleChange = this.handleChange.bind(this);
	}

	//validate event for email
	validateEmail(e) {
		const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const { validate } = this.state;
		if (emailRex.test(e.target.value)) {
			validate.emailState = 'has-success';
		} else {
			validate.emailState = 'try-again';
		}
		this.setState({ validate });
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
		console.log('YOU HAVE SUCCESSFULLY SIGN-UP');
	}

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
								value={this.state.email}
								valid={this.state.validate.emailState === 'has-success'}
								invalid={this.state.validate.emailState === 'try-again'}
								onChange={e => {
									this.validateEmail(e);
									this.handleChange(e);
								}}
							/>
							{/** FeedbackMsg for Valid Email and Invalid Email */}
							<FormFeedback valid>Successful Email</FormFeedback>
							<FormFeedback>Please use correct email format!</FormFeedback>
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
						<FormGroup>
							<Label for='examplePassword'>Confirm Password</Label>
							<Input
								type='password'
								name='password'
								id='examplePassword'
								placeholder='********'
								value={this.confirmPassword}
								onChange={e => {
									this.handleChange(e);
								}}
							/>
							{/** FeedbackMsg for Successful/Unsuccessful Password Match */}
							<FormFeedback valid>Successful Password Match</FormFeedback>
							<FormFeedback>Please check your password again!</FormFeedback>
						</FormGroup>
					</Col>
					<FormGroup check>
						<Input type='checkbox' name='check' id='exampleCheck' />
						<Label for='exampleCheck' check>
							Is Seeker
						</Label>
					</FormGroup>
					<Button onClick={this.clickHandler}>Sign-Up</Button>
				</Form>
			</Container>
		);
	}
}
export default Signup;
