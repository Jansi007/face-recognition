import React, { Component } from 'react'
import 'tachyons'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageForm from './components/ImageForm/ImageForm'
import './App.css'
import Particles from 'react-particles-js'

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

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onBtnClick = () =>{
    console.log(this.state.input)
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  render() {
    return (
      <div className="App">

        <div className="flexSpace topCon">
          <Logo />
          <Navigation />
        </div>

        <Rank />
        <ImageForm onBtnClick={this.onBtnClick} onInputChange={this.onInputChange} />

        <Particles params={particles} className="particles" />

      </div>
    );
  }
}

export default App;
