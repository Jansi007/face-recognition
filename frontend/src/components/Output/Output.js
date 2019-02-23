import React from 'react'
import './Output.css'

const Output = ({ imgURL, div }) => {
	return(
		<div className="flexCenter">
 			<div className="bound-con" >
 				<img src={imgURL} alt="" className="img" id="rawImg" />
 				{div}
 			</div>	
 		</div>
	);
}

export default Output