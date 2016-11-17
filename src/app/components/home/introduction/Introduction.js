import React, { Component } from 'react'
import {ParallaxSession} from '../../../util'
import {queryFromFireBase} from '../../../connector/Firebase'

export default class Introduction extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  setFireUser(self,data){
    self.setState({
      name:data.name,
      real_name:data.real_name,
      position:data.position,
      workplace:data.workplace,
      label:data.label,
      introduce_word:data.introduce_word
    })
  }
  componentDidMount(){
    queryFromFireBase(this,'infomation',this.setFireUser)
  }
  render(){
    return (
      <ParallaxSession
        img="dist/medias/images/dummy1.png"
        height = "500px"
      >
        <div className="white-text">
          <h3 className="condensed light">Hello Visitor!</h3>
          <h1 className="condensed"><span className="light">I'm </span>{this.state.name}</h1>
          <h6 className="condensed light">( {this.state.real_name} )</h6>
          <h5 className="condensed light">
            {this.state.position} <span className={this.state.label}>@{this.state.workplace}</span>
          </h5>
          <h5 className="condensed light">{this.state.introduce_word}</h5>
        </div>
      </ParallaxSession>
    )
  }
}
