import React, { Component } from 'react'
import {Row,Col} from 'react-materialize'
import {ParallaxSession,HalfCircleProgressItem} from '../../util'

export default class Home extends Component {
  render() {
    return (
      <div>
        <ParallaxSession
          id="intro"
          img="dist/medias/images/dummy1.png"
        >
          <div className="white-text">
            <h1 className="condensed light">Skill</h1>
            <h3 className="condensed light">Communicating Skill</h3>
            <Row>
              <Col s={12} m={4}>
                <HalfCircleProgressItem
                  id = "thai"
                  textColor="orange-text"
                  color = "#ffab40"
                  name="Thai"
                  rank="Native"
                  value={0.9}
                />
              </Col>
              <Col s={12} m={4}>
                <HalfCircleProgressItem
                  id = "english"
                  textColor="light-blue-text"
                  color = "#81d4fa"
                  name="English"
                  rank="Intermediate"
                  value={0.65}
                />
              </Col>
              <Col s={12} m={4}>
                <HalfCircleProgressItem
                  id = "japanese"
                  textColor=" red-text"
                  color = "#ff5252 "
                  name="Japanese"
                  rank="Elementary"
                  value={0.05}
                />
              </Col>
            </Row>
          </div>
        </ParallaxSession>
      </div>
    )
  }
}
