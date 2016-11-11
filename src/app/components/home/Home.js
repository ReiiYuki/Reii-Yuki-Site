import React, { Component } from 'react'
import {Row,Col} from 'react-materialize'
import Introduction from './Introduction'
import {ParallaxSession,TriSection} from '../../util'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Introduction/>
        
      </div>
    )
  }
}
