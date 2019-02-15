import React, { Component } from 'react'
import 'tachyons'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageForm from './components/ImageForm/ImageForm'
import Output from './components/Output/Output'
import ParticleSystem from './components/ParticleSystem/ParticleSystem'
import './App.css'
import Clarifai from 'clarifai'

const app = new Clarifai.App({
 apiKey: '39ed9d27a99f4025ba8182b668b0811c'
});


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imgURL: '',
      boxData: {}
    }
  }

  calcFaceLoc = (input) => {
    const rawData = input.outputs[0].data.regions[0].region_info.bounding_box
    const rawImg = document.getElementById('rawImg')
    const height = Number(rawImg.height)
    const width = Number(rawImg.width)

    console.log(rawData)

    return{
      botRow: height - (rawData.bottom_row * height),
      leftCol: width * rawData.left_col,
      rightCol: width - (rawData.right_col * width),
      topRow: height * rawData.top_row
    }    
  }

  displayFaceBox = (boxData) => {
    console.log(boxData)
    this.setState({boxData: boxData})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onBtnClick = () =>{
    this.setState({imgURL: this.state.input}) 
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calcFaceLoc(response)));
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
        <Output imgURL={this.state.imgURL} boxData={this.state.boxData} />
        <ParticleSystem />

      </div>
    );
  }
}

export default App;
