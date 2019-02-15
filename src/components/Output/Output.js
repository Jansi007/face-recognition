import React from 'react'
import './Output.css'

const Output = ({ imgURL, boxData }) =>{
	return(
		<div>
			<img src={imgURL} alt="" className="img" id="rawImg" />
			<div className="boinding-box" style={{top: boxData.topRow, right: boxData.rightCol, bottom: boxData.botRow, left: leftCol}} ></div>
		</div>
	);
}

export default Output