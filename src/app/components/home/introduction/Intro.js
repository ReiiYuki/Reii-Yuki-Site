import React, { Component } from 'react'
import {Introduction,GoodPoints} from './'
export default class Intro extends Component {
  render(){
    return (
      <div id="intro">
        <Introduction/>
        <GoodPoints/>
      </div>
    )
  }
}
