import React, { Component } from 'react'
import 'tachyons'
import SignOut from './components/SignOut/SignOut'
import Logo from './components/Logo/Logo'
import ImageForm from './components/ImageForm/ImageForm'
import Output from './components/Output/Output'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
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
      div: '',
      route: 'signIn',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    })
    console.log(data)
  }

  componentDidMount() {

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
      return null
    })

    dataArray.map(item => {
      dataProcessed.push({ botRow: height - (item.bottom_row * height), 
                            leftCol: width * item.left_col, 
                            rightCol: width - (item.right_col * width),
                            topRow: height * item.top_row
                          })
      return null
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

  onRouteChange = (prop) => {
    if(prop === 'signOut'){
      this.setState({isSignedIn: false})
      prop = 'signIn'
    }
    if(prop === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: prop})
  }

  signIn = () => {
    this.setState({isSignedIn: true})
  }

  render() {
    if(this.state.route === 'signIn'){
      return  <div>
                <div className="App">

                  <div className="flexSpace topCon">
                    <Logo />
                  </div>

                  <ParticleSystem />
                  <SignIn onRouteChange={this.onRouteChange} />
                </div>
              </div>
    }else if(this.state.route === 'register'){
      return  <div>
                <div className="App">

                  <div className="flexSpace topCon">
                    <Logo />
                  </div>

                  <ParticleSystem />
                  <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
                </div>
              </div>
    }else if(this.state.route === 'home'){
      return  <div>
                <div className="App">

                  <div className="flexSpace topCon">
                    <Logo />
                    <SignOut onRouteChange={this.onRouteChange} />
                  </div>

                  <ParticleSystem />
                  <ImageForm onBtnClick={this.onBtnClick} onInputChange={this.onInputChange} />
                  <Output imgURL={this.state.imgURL} div={this.state.div} />
                </div>
              </div>
    }
  }
}

export default App;