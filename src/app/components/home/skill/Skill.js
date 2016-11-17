import React, { Component } from 'react'
import {queryFromFireBase} from '../../../connector/Firebase'
import {ParallaxSession} from '../../../util'
import {SkillItem} from './'

export default class Skill extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  setFireSkill(self,data){
    self.setState({
      skills : data
    })
  }
  componentDidMount(){
    queryFromFireBase(this,'skills',this.setFireSkill)
  }
  render(){
    return (
      <div id="skill">
        <ParallaxSession
          id="intro"
          img="dist/medias/images/skill-bg.jpg"
          height="2000px"
        >
          <div className="white-text">
            <h1 className="condensed light">Skill</h1>
            {
              this.state.skills?
              this.state.skills.map((skill_type)=>(
                <div key={this.state.skills.indexOf(skill_type)}>
                  <h3 className="condensed light">{skill_type.type}</h3>
                  <div className="row">
                    {
                      skill_type.skill_list.map((skill)=>(
                        <SkillItem
                          key={skill_type.skill_list.indexOf(skill)}
                          id={"skill-"+skill.name.replace('#','s').replace('++','pp').replace('.','')}
                          name={skill.name}
                          textColor={skill.text_color}
                          color={skill.color}
                          value={skill.value}
                          rank={skill.level}
                        />
                      ))
                    }
                  </div>
                </div>
              ))
              :
                <div></div>
            }
          </div>
        </ParallaxSession>
      </div>
    )
  }
}
