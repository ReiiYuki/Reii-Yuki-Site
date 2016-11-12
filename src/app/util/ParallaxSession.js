import React, { Component } from 'react'
import '../../assets/scss/Util.scss'
export default class ParallaxSession extends Component {
  componentDidMount(){
    $('.parallax').parallax()
  }
  render() {
    let height = {
      height : this.props.height
    }
    return (
      <div className="parallax-container" style={height}>
        <div className="container middle">
          {this.props.children}
        </div>
        <div className="parallax"><img src={this.props.img}/></div>
      </div>
    )
  }
}
