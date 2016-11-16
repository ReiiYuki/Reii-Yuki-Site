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
    readDB('introduction',this.setInterestState,this)
  }
  setUserState(self,data){
    let info = data[0]
    self.setState({
      name:info['name'],
      real_name:info['real_name'],
      position:info['position'],
      workplace:info['workplace'],
      label:info['label']
    })
  }
  setInterestState(self,data){
    self.setState({
      interest:data[0]['interest'],
      good_thing:data.slice(1)
    })
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
              <h5 className="condensed light">{this.state.interest}</h5>
            </div>
          </ParallaxSession>
          <TriSection
            color = " light-blue darken-4"
            title="How good am I?"
            textColor = "white-text"
            left={
              <div>
                {this.state.good_thing?
                  <div>
                    <i className={"mdi "+this.state.good_thing[0]['icon']+" mdi-48px"}></i>
                    <h4 className="condensed light">{this.state.good_thing[0]['title']}</h4>
                    <p className="condensed" dangerouslySetInnerHTML={{__html:this.state.good_thing[0]['description']}}></p>
                  </div>
                  :<div></div>
                }
              </div>
            }
            center={
              <div>
                {this.state.good_thing?
                  <div>
                    <i className={"mdi "+this.state.good_thing[1]['icon']+" mdi-48px"}></i>
                    <h4 className="condensed light">{this.state.good_thing[1]['title']}</h4>
                    <p className="condensed" dangerouslySetInnerHTML={{__html:this.state.good_thing[1]['description']}}></p>
                  </div>
                  :<div></div>
                }
              </div>
            }
            right={
              <div>
                {this.state.good_thing?
                  <div>
                    <i className={"mdi "+this.state.good_thing[2]['icon']+" mdi-48px"}></i>
                    <h4 className="condensed light">{this.state.good_thing[2]['title']}</h4>
                    <p className="condensed" dangerouslySetInnerHTML={{__html:this.state.good_thing[2]['description']}}></p>
                  </div>
                  :<div></div>
                }
              </div>
            }
          />
        </div>
      </div>
    )
  }
}
