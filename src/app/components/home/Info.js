import React, { Component } from 'react'
import {ParallaxSession} from '../../util'
import {readDB} from '../../connector/mongodb'
export default class Info extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  readDataFromDB(){
    readDB('info_data',this.setDataState,this)
    readDB('footer',this.setFooterState,this)
  }
  setDataState(self,data){
    self.setState({data:data})
  }
  setFooterState(self,data){
    self.setState({author:data[0]['author'],tools:data.slice(1)})
  }
  componentDidMount(){
    this.readDataFromDB()
  }
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
              {this.state.data?
                <div>
                  {this.state.data.map((data)=>(
                    <div key={data._id.$oid} className="row">
                      <div className="col s12"><a href={data.path} className="btn waves-light wave-effect">{"Download "+data.type}</a></div>
                    </div>
                  ))}
                </div>
                :<div></div>
              }
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
