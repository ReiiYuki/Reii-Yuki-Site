import React, { Component } from 'react'
import '../../../assets/scss/Nav.scss'
export default class Nav extends Component {
  componentDidMount(){
    $(".button-collapse").sideNav()
  }
  onClick(){
    $('.button-collapse').sideNav('hide');
  }
  render() {
    return (
      <nav className="transparent z-depth-0 over">
        <div className="nav-wrapper condensed light">
          <a href="#" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="hide-on-med-and-down">
            <div className="left">
              <li><a href="https://www.facebook.com/shou.iguru"><i className="mdi mdi-facebook-box mdi-32px"></i></a></li>
              <li><a href="https://github.com/ReiiYuki"><i className="mdi mdi-github-circle mdi-32px"></i></a></li>
              <li><a href="https://twitter.com/EagleLight96"><i className="mdi mdi-twitter mdi-32px"></i></a></li>
              <li><a href="mailto:iguru.shou.5410070@gmail.com"><i className="mdi mdi-gmail mdi-32px"></i></a></li>
            </div>
            <div className="right">
              <li><a href="#intro">Intro</a></li>
              <li><a href="#skill">Skill</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#info">Info</a></li>
            </div>
          </ul>
          <ul className="side-nav  light-blue darken-4" id="mobile-nav">
            <li >
              <ul className="row center inline-ul">
                <li className="inline"><a href="https://www.facebook.com/shou.iguru"><i className="mdi mdi-facebook-box  mdi-light mdi-32px"></i></a></li>
                <li className="inline"><a href="https://github.com/ReiiYuki"><i className="mdi mdi-github-circle mdi-light mdi-32px"></i></a></li>
                <li className="inline"><a href="https://twitter.com/EagleLight96"><i className="mdi mdi-twitter mdi-light  mdi-32px"></i></a></li>
                <li className="inline"><a href="mailto:iguru.shou.5410070@gmail.com"><i className="mdi mdi-gmail  mdi-light  mdi-32px"></i></a></li>
              </ul>
            </li>
            <li><a className="white-text" href="#intro" onClick={()=>this.onClick()}>Intro</a></li>
            <li><a className="white-text" href="#skill" onClick={()=>this.onClick()}>Skill</a></li>
            <li><a className="white-text" href="#project" onClick={()=>this.onClick()}>Project</a></li>
            <li><a className="white-text" href="#info" onClick={()=>this.onClick()}>Info</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
