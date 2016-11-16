import React, { Component } from 'react'
import {ParallaxSession} from '../../util'
export default class Info extends Component {
  render(){
    let style = {
      float:"bottom"
    }
    return (
      <div id="info">
        <div>
          <ParallaxSession
            id="intro"
            img="dist/medias/images/dummy1.png"
            height = "500px"
          >
            <div className="container center">
              <div className="row">
                <h1 className="condensed light white-text">
                  Download Infomation
                </h1>
              </div>
              <div className="row">
                <div className="col s12"><a href="dist/medias/documents/Resume.pdf" className="btn waves-light wave-effect">Download Resume</a></div>
              </div>
              <div className="row ">
                <div className="col s12"><a href="dist/medias/documents/Transcripts.pdf" className="btn waves-light wave-effect">Download Transcripts</a></div>
              </div>
              <div className="row" style={style}>
                <p className="condensed light white-text">
                  © Powered by <a className=" white-text" href="https://github.com/ReiiYuki">Reii Yuki</a> - <a  className=" white-text" href="https://facebook.github.io/react">React</a> • <a  className=" white-text" href="http://materializecss.com">Materialize</a>
                </p>
              </div>
            </div>
          </ParallaxSession>
        </div>
      </div>
    )
  }
}
