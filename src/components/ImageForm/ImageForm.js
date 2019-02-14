import React from 'react'
import './ImageForm.css'

const ImageForm = ({ onBtnClick, onInputChange }) => {
	return(
		<div className="flexCenter">
			<div className="flexCenter con">
				<input type="text" className="input" placeholder="url" onChange={onInputChange} />
				<button className="btn pointer" onClick={onBtnClick}>Detect</button>
			</div>
		</div>
	);
}

export default ImageForm