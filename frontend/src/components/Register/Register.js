import React from 'react'
import './Register.css'

class Register extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			password: ''
		}
	}

	componentDidMount() {
		document.addEventListener('keypress', (event) => {
			if(event.keyCode === 13){
				this.onSubmit()
			}
		})
	}

	onFirstNameChange = (event) => {
		this.setState({ firstname: event.target.value})
	}

	onLastNameChange = (event) => {
		this.setState({ lastname: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({ email: event.target.value })
	}

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value })
	}

	onSubmit = () => {
		fetch('http://localhost:3000/register/', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.firstname,
				email: this.state.email,
				password: this.state.password
			})
		})
			.then(res => res.json())
			.then(user => {
				if(user){
					this.props.loadUser(user)
					this.props.onRouteChange('home')
				}
			})
	}

	render(){
		return(
			<div className="flexCenter">
				<div className="signInCon" >
					<div action="" className="signInForm">
						<div className="nameInputCon" >
							<input type="text" onChange={this.onFirstNameChange} placeholder="Firstname" className="textNameInput" />
							<input type="text" onChange={this.onLastNameChange} placeholder="Lastname" className="textNameInput" />
						</div>
						<input type="text" onChange={this.onEmailChange} placeholder="E-Mail" className="textInput" />
						<input type="password" onChange={this.onPasswordChange} placeholder="Password" className="textInput" />
						<input type="submit" className="submitBtn" onClick={this.onSubmit} value="Register" />
					</div>
				</div>
			</div>
		);
	}
}

export default Register;