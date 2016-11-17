import React, { Component } from 'react'
import {queryFromFireBase} from '../../../connector/Firebase'

export default class Info extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  setFireCredit(self,data){
    self.setState({
      credits : data
    })
  }
  componentDidMount(){
    queryFromFireBase(this,'credits',this.setFireCredit)
  }
  render(){
    let style = {
      float:"bottom"
    }
    return (
      <div className="row" style={style}>
        <span className="condensed light white-text">
          {"© Powered by • "}
          {
            this.state.credits?
              <span>
                {
                  this.state.credits.map((credit)=>(
                    <a key={"credit-"+this.state.credits.indexOf(credit)} className=" white-text" href={credit.link}>{credit.name} • </a>
                  ))
                }
              </span>
            :<div></div>
          }
        </span>
      </div>
    )
  }
}
