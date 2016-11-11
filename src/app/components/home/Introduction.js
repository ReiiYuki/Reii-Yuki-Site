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
            img="dist/medias/images/dummy1.png"
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
              <div>
                <h4 className="condensed light">Active</h4>
                <p className="condensed"><span className="light">More than </span>thousand countributions<span className="light"> and More than </span>25 respositories<span className="light"> (including collaborating respositories) on Github in this year</span></p>
              </div>
            }
            center={
              <div>
                <h4 className="condensed light">Experience</h4>
                <p className="condensed light">
                  I have experience in many programming language and many framework since 2014 such as Java , Python , C# , Prolog , C++ , Javascript , Android , React , Django , Cocos2d-X , ETC.
                </p>
              </div>
            }
            right={
              <div>
                <h4 className="condensed light">Learner</h4>
                <p className="condensed light">
                  I love to learn new thing or the thing that I didn't know before such as Vue.js 2 which release in this year.
                </p>
              </div>
            }
          />
        </div>
      </div>
    )
  }
}
