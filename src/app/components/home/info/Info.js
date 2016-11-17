import React, { Component } from 'react'
import {ParallaxSession} from '../../../util'
import {Footer,FilesContainer} from './'
export default class Info extends Component {

  render(){
    return (
      <div id="info">
        <ParallaxSession
          img="dist/medias/images/dummy1.png"
          height = "500px"
        >
          <div className="container center">
            <FilesContainer />
            <Footer />
          </div>
        </ParallaxSession>
      </div>
    )
  }
}
