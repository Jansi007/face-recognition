import React from 'react'
import './Register.css'

const Register = ({ onRouteChange }) => {
	return(
		<div className="flexCenter">
			<div className="signInCon" >
				<div action="" className="signInForm">
					<div className="nameInputCon" >
						<input type="text" placeholder="Firstname" className="textNameInput" />
						<input type="text" placeholder="Lastname" className="textNameInput" />
					</div>
					<input type="text" placeholder="E-Mail" className="textInput" />
					<input type="password" placeholder="Password" className="textInput" />
					<input type="submit" className="submitBtn" onClick={() => onRouteChange('home')} value="Register" />
				</div>
			</div>
		</div>
	);
}

export default Register