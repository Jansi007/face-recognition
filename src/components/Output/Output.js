import React, { Component } from 'react'
import './Output.css'

class Output extends Component{
	render() {
		return(
			<div className="flexCenter">
				<div className="bound-con" >
					<img src={this.props.imgURL} alt="" className="img" id="rawImg" />
					{this.props.div}
				</div>	
			</div>
		);
	}
}

export default Output