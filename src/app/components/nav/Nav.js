import React, { Component } from 'react'
import {Navbar,NavItem} from 'react-materialize'
import '../../../assets/scss/Nav.scss'
export default class Nav extends Component {
  componentDidMount(){
    $(".button-collapse").sideNav()
  }
  render() {
    return (
      <nav className="transparent z-depth-0 over">
        <div className="nav-wrapper condensed light">
          <a href="#" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#intro">Intro</a></li>
            <li><a href="#skill">Skill</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ul className="side-nav" id="mobile-nav">
            <li><a href="#intro">Intro</a></li>
            <li><a href="#skill">Skill</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
