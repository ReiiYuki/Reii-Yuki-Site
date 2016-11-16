import React, { Component } from 'react'
import {ParallaxSession,TriSection} from '../../util'
export default class Home extends Component {
  render(){
    return (
      <div id="intro">
        <div>
          <ParallaxSession
            id="intro"
            img="dist/medias/images/dummy1.png"
            height = "500px"
          >
            <div className="white-text">
              <h3 className="condensed light">Hello Visitor!</h3>
              <h1 className="condensed"><span className="light">I'm </span>Reii Yuki</h1>
              <h6 className="condensed light">( Voraton Lertrattanapaisal )</h6>
              <h5 className="condensed light">
                3rd year Software and Knowledge Engineering Student <span className="light-green-text">@Kasetsart University</span>
              </h5>
              <h5 className="condensed light">I interest in Game Development, Web Development, Artificial Intelligent and Android Development</h5>
            </div>
          </ParallaxSession>
          <TriSection
            color = " light-blue darken-4"
            title="How good am I?"
            textColor = "white-text"
            left={
              <div>
                <i className="mdi mdi-github-circle mdi-48px"></i>
                <h4 className="condensed light">Active</h4>
                <p className="condensed"><span className="light">More than </span>thousand countributions<span className="light"> and More than </span>25 respositories<span className="light"> (including collaborating respositories) on Github in this year</span></p>
              </div>
            }
            center={
              <div>
                <i className="mdi mdi-code-braces mdi-48px"></i>
                <h4 className="condensed light">Experience</h4>
                <p className="condensed light">
                  I have experience in many programming language and many framework since 2014 such as Java , Python , C# , Prolog , C++ , Javascript , Android , React , Django , Cocos2d-X , ETC.
                </p>
              </div>
            }
            right={
              <div>
                <i className="mdi mdi-book-open-page-variant mdi-48px"></i>
                <h4 className="condensed light">Learner</h4>
                <p className="condensed light">
                  I love to learn new thing or the thing that I didn't know before from content or course like Udemy or Codeacademy by doing it.
                </p>
              </div>
            }
          />
        </div>
      </div>
    )
  }
}
