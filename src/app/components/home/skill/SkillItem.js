import React, { Component } from 'react'
import {HalfCircleProgressItem} from '../../../util'

export default class SkillItem extends Component {
  render(){
    return (
      <span>
        {
          this.props.value?
            <div className="col s3">
              <HalfCircleProgressItem
                id = {this.props.id}
                textColor={this.props.textColor}
                color = {this.props.color}
                name={this.props.name}
                rank={this.props.rank}
                value={this.props.value}
              />
            </div>
          :
          <span>
            {" • "+this.props.name}
          </span>
        }
      </span>

      )
    }
  }
