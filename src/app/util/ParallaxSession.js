import React, { Component } from 'react'
import '../../assets/scss/Util.scss'
export default class ParallaxSession extends Component {
  componentDidMount(){
    $('.parallax').parallax()
  }
  render() {
    return (
      <div className="parallax-container">
        <div className="container middle">
          {this.props.children}
        </div>
        <div className="parallax"><img src={this.props.img}/></div>
      </div>
    )
  }
}
