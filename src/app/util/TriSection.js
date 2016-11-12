import React, { Component } from 'react'

export default class TriSection extends Component {

  render() {
    let fab = { marginBottom : "0px"}
    return (
      <div className={this.props.color+" z-dept-1"} >
        <div className={"container "+this.props.textColor}>
          <div className="row">
            <div className="col s12 center"><h3 className="condensed light">{this.props.title}</h3></div>
          </div>
          <div className="row" style={fab}>
            <div className="col s12 m4 center">
              {this.props.left}
            </div>
            <div className="col s12 m4 center">
              {this.props.center}
            </div>
            <div className="col s12 m4 center">
              {this.props.right}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
