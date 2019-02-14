import React, {Component} from 'react'
import Particles from 'react-particles-js'
import './ParticleSystem.css'

const particles = {
                    particles: {
                      number: {
                        value: 40,
                        density:{
                          enable: true,
                          value_area: 600
                        }
                      },
                    },
                  }

class ParticleSystem extends Component {
	shouldComponentUpdate() {
    return false; // Will cause component to never re-render.
	}

	render(){
		return(
			<div>
				<Particles params={particles} className="particles" />
			</div>
		);
	}
	
}

export default ParticleSystem