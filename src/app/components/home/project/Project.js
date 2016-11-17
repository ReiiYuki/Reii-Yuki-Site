import React, { Component } from 'react'
import {queryFromFireBase} from '../../../connector/Firebase'
import {ProjectItem} from './'

export default class Project extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  setFireProject(self,data){
    self.setState({
      projects:data
    })
  }
  componentDidMount(){
    queryFromFireBase(this,'projects',this.setFireProject)
  }
  render(){
    return (
      <div id="project">
        <div className="section light-blue darken-4 white-text">
          <div className="container">
            <h1 className="condensed light">Project</h1>
            {
              this.state.projects?
              this.state.projects.map(
              (projects)=>(
                <div key={"project-yr-"+projects.year}>
                  <h3 className="condensed light">{projects.year}</h3>
                  <div className="row">
                    {
                      projects.project_list.map(
                      (project)=>(
                        <ProjectItem
                          key={"project-"+project.name.replace(':','-').replace(' ','-')}
                          id={"project-"+project.name.replace(':','-').replace(' ','-')}
                          name={project.name}
                          link={project.link}
                          img={project.img}
                        />
                      )
                      )
                    }
                  </div>
                </div>
              )
              )
              :
                <div></div>
            }
          </div>
        </div>
      </div>
    )
  }
}
