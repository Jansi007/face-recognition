import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'


const Logo = () => {
	return(
		<div>
			<Tilt className="Tilt flexCenter" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
 				<div className="Tilt-inner"><p className="logoText">J</p></div>
			</Tilt>
		</div>
	);
}

export default Logo;