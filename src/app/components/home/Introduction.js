import React, { Component } from 'react'
import {Row,Col} from 'react-materialize'
import {ParallaxSession,TriSection} from '../../util'
export default class Home extends Component {
  render(){
    return (
      <div id="intro">
        <div>
          <ParallaxSession
            id="intro"
            img="src/assets/medias/images/dummy1.png"
          >
            <div >
              <h3 className="condensed light">Hello Visitor!</h3>
              <h1 className="condensed"><span className="light">I'm </span>Reii Yuki</h1>
              <h6 className="condensed light">( Voraton Lertrattanapaisal )</h6>
              <h5 className="condensed light">
                Software and Knowledge Engineering Student <span className="light-green-text">@Kasetsart University</span>
              </h5>
            </div>
          </ParallaxSession>
          <TriSection
            title="How good am I?"
            left={
              <h4>Kid Mai ok</h4>
            }
            center={
              <h4>I don't Know</h4>
            }
            right={
              <h4>Mai Bok</h4>
            }
          />
        </div>
      </div>
    )
  }
}
