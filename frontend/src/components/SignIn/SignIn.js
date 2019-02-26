import React from 'react'
import './SignIn.css'

class SignIn extends React.Component {
	constructor(props){
		super(props);
		this.state = {
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

	onEmailChange = (event) => {
		this.setState({ email: event.target.value })
	}

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value })
	}

	onSubmit = () => {
		fetch('http://localhost:3000/signin/', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		})
			.then(res => res.json())
			.then(data => {
				if(data === 'success'){
					this.props.onRouteChange('home')
				}
			})
	}

	render(){
		const { onRouteChange } = this.props
		return(
			<div className="flexCenter">
				<div className="signInCon" >
					<div action="" className="signInForm">
						<input type="text" onChange={this.onEmailChange} placeholder="E-Mail" className="textInput" />
						<input type="password" onChange={this.onPasswordChange} placeholder="Password" className="textInput" />
						<input type="submit" className="submitBtn" onClick={this.onSubmit} value="Sign in" />
						<p className="registerBtn" onClick={() => onRouteChange('register')} >Register</p>
					</div>
				</div>
			</div>
		);
	}
}

export default SignIn