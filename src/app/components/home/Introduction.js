import React, { Component } from 'react'
import {ParallaxSession,TriSection} from '../../util'
import {readDB} from '../../connector/mongodb'
export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  readDataFromDB(){
    readDB('personal_infomation',this.setUserState,this)
  }
  setUserState(self,data){
    self.setState(data[0])
  }
  componentDidMount(){
    this.readDataFromDB()
  }
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
              <h1 className="condensed"><span className="light">I'm </span>{this.state.name}</h1>
              <h6 className="condensed light">( {this.state.real_name} )</h6>
              <h5 className="condensed light">
                {this.state.position} <span className={this.state.label}>@{this.state.workplace}</span>
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
