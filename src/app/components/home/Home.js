import React, { Component } from 'react'
import {Introduction,Skill,Project,Info} from './'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Introduction/>
        <Skill/>
        <Project/>
        <Info/>
      </div>
    )
  }
}
