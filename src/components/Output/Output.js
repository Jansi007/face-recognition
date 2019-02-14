import React from 'react'
import './Output.css'

const Output = ({ imgURL }) =>{
	return(
		<div>
			<img src={imgURL} alt="" className="img" />
		</div>
	);
}

export default Output