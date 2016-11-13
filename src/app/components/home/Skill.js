import React, { Component } from 'react'
import {Row,Col} from 'react-materialize'
import {ParallaxSession,HalfCircleProgressItem} from '../../util'

export default class Home extends Component {
  render() {
    return (
      <div id="skill">
        <ParallaxSession
          id="intro"
          img="dist/medias/images/dummy1.png"
          height="1000px"
        >
          <div className="white-text">
            <h1 className="condensed light">Skill</h1>
            <h3 className="condensed light">Communicating Skill</h3>
            <Row >
              <Col m={3}>
                <HalfCircleProgressItem
                  id = "thai"
                  textColor="orange-text"
                  color = "#ffab40"
                  name="Thai"
                  rank="Native"
                  value={0.9}
                />
              </Col>
              <Col m={3}>
                <HalfCircleProgressItem
                  id = "english"
                  textColor="light-blue-text"
                  color = "#81d4fa"
                  name="English"
                  rank="Intermediate"
                  value={0.65}
                />
              </Col>
              <Col m={3}>
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
            <h3 className="condensed light">Developing Skill</h3>
            <Row>
              <Col m={3}>
                <HalfCircleProgressItem
                  id = "java"
                  textColor="red-text"
                  color = "#ff1744"
                  name="Java"
                  rank="Familiar"
                  value={0.7}
                />
              </Col>
              <Col m={3}>
                <HalfCircleProgressItem
                  id = "python"
                  textColor="amber-text"
                  color = "#ffd54f"
                  name="Python"
                  rank="Familiar"
                  value={0.85}
                />
              </Col>
              <Col  m={3}>
                <HalfCircleProgressItem
                  id = "android"
                  textColor=" green-text"
                  color = "#64dd17"
                  name="Android"
                  rank="Average"
                  value={0.65}
                />
              </Col>
              <Col  m={3}>
                <HalfCircleProgressItem
                  id = "react"
                  textColor=" blue-text"
                  color = "#90caf9"
                  name="React"
                  rank="Familiar"
                  value={0.75}
                />
              </Col>
              <Col  m={3}>
                <HalfCircleProgressItem
                  id = "cocos"
                  textColor=" blue-text"
                  color = "#90caf9"
                  name="Cocos2d-X (JS)"
                  rank="Rarely"
                  value={0.3}
                />
              </Col>
              <Col  m={3}>
                <HalfCircleProgressItem
                  id = "django"
                  textColor=" amber-text"
                  color = "#ffd54f"
                  name="Django"
                  rank="Average"
                  value={0.5}
                />
              </Col>
              <Col  m={3}>
                <HalfCircleProgressItem
                  id = "node"
                  textColor="light-green-text accent-3"
                  color = "#b2ff59"
                  name="Node.js"
                  rank="Rarely"
                  value={0.4}
                />
              </Col>
              <Col  m={3}>
                <HalfCircleProgressItem
                  id = "unity"
                  textColor=" blue-text"
                  color = "#90caf9"
                  name="Unity3D"
                  rank="Elementary"
                  value={0.2}
                />
              </Col>
            </Row>
          </div>
        </ParallaxSession>
      </div>
    )
  }
}
