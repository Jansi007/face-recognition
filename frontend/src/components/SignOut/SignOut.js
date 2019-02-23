import React from 'react';
import './SignOut.css';

const SignOut = ({ onRouteChange }) => {
	return(
		<div className="container">
			<div className="rightCon">
				<p className="pointer hover signText" onClick={() => onRouteChange('signOut')} >Sign out</p>
			</div>
		</div>
	);
}

export default SignOut;