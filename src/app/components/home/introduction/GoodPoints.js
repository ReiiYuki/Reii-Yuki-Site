import React, { Component } from 'react'
import {TriSection} from '../../../util'
import {queryFromFireBase} from '../../../connector/Firebase'

export default class GoodPoints extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  setFireInterest(self,data){
    self.setState({
      good_points : data
    })
  }
  componentDidMount(){
    queryFromFireBase(this,'good_point',this.setFireInterest)
  }
  render(){
    let fab = { marginBottom : "0px"}
    return (
      <div className="light-blue darken-4 z-dept-1" >
        <div className="container white-text">
          <div className="row">
            <div className="col s12 center"><h3 className="condensed light">How good am I ?</h3></div>
          </div>
          <div className="row" style={fab}>
            {
              this.state.good_points?
                <div>
                  {
                    this.state.good_points.map((point)=>(
                      <div
                        key={this.state.good_points.indexOf(point)}
                        className="col s12 m4 center"
                      >
                        <div>
                          <i className={"mdi "+point.icon+" mdi-48px"}></i>
                          <h4 className="condensed light">{point.title}</h4>
                          <p className="condensed" dangerouslySetInnerHTML={{__html:point.description}}></p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              :<div></div>
          }
        </div>
      </div>
    </div>
  )
}
}
