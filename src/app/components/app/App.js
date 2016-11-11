import React, { Component } from 'react'
import Nav from '../nav/Nav'
import '../../../assets/scss/Body.scss'
export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="behind">
          {this.props.children}
        </div>
      </div>
    )
  }
}
