import React from 'react'
import './SignIn.css'

const SignIn = ({ onRouteChange }) => {
	return(
		<div className="flexCenter">
			<div className="signInCon" >
				<div action="" className="signInForm">
					<input type="text" placeholder="E-Mail" className="textInput" />
					<input type="password" placeholder="Password" className="textInput" />
					<input type="submit" className="submitBtn" onClick={() => onRouteChange('home')} value="Sign in" />
					<p className="registerBtn" onClick={() => onRouteChange('register')} >Register</p>
				</div>
			</div>
		</div>
	);
}

export default SignIn