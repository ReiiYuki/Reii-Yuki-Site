import React, { Component } from 'react'
import {Introduction,Skill,Project} from './'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Introduction/>
        <Skill/>
        <Project/>
      </div>
    )
  }
}
