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
 apiKey: '68d9d42e06354e74aa2bb73c40fad395'
});


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imgURL: '',
      boxData: [{}],
      div: ''
    }
  }

  divCreation = (item) => {
    const list = item.dataProcessed
    return list.map((item, i) =>{
      return <div key={i} className="bounding-box" style={{top: item.topRow, right: item.rightCol, bottom: item.botRow, left: item.leftCol}} ></div>
    })
  }

  calcFaceLoc = (input) => {
    const rawData = input.outputs[0].data.regions
    const rawImg = document.getElementById('rawImg')
    const height = Number(rawImg.height)
    const width = Number(rawImg.width)
    let dataArray = []
    let dataProcessed = []

    rawData.map(item => {
      dataArray.push(item.region_info.bounding_box)
    })

    dataArray.map(item => {
      dataProcessed.push({ botRow: height - (item.bottom_row * height), 
                            leftCol: width * item.left_col, 
                            rightCol: width - (item.right_col * width),
                            topRow: height * item.top_row
                          })
    })

    return{
      dataProcessed
    }    
  }

  displayFaceBox = (boxData) => {
    this.setState({boxData: boxData})
    this.setState({div: this.divCreation(boxData)})
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
        <Output imgURL={this.state.imgURL} div={this.state.div} />
        <ParticleSystem />

      </div>
    );
  }
}

export default App;
