import React, { Component } from 'react'

export default class ProjectItem extends Component {
  render(){
    return (
      <div className="col s3">
        <div id={this.props.id} className="center">
          <a href={this.props.link}>
            <img src={this.props.img} className="responsive-img"></img>
            <h5 className="center white-text condensed light">{this.props.name}</h5>
          </a>
        </div>
      </div>
    )
  }
}
