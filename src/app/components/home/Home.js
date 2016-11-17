import React, { Component } from 'react'
import {Intro,Skill,Project,Info} from './'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Intro/>
        <Skill/>
        <Project/>
        <Info/>
      </div>
    )
  }
}
