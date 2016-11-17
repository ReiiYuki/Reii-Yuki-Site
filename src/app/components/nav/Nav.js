import React, { Component } from 'react'
import {queryFromFireBase} from '../../connector/Firebase'
import '../../../assets/scss/Nav.scss'
export default class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  setFireContact(self,data){
    self.setState({
      contacts : data
    })
  }
  componentDidMount(){
    queryFromFireBase(this,'contact_infomation',this.setFireContact)
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
              {
                this.state.contacts?
                this.state.contacts.map((contact)=>(
                  <li key={"nav-"+this.state.contacts.indexOf(contact)}><a href={contact.destination}><i className={"mdi "+contact.icon+" mdi-32px"}></i></a></li>
                ))
                :<div></div>
              }
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
                {
                  this.state.contacts?
                  this.state.contacts.map((contact)=>(
                    <li key={"nav-"+this.state.contacts.indexOf(contact)}><a href={contact.destination}><i className={"mdi "+contact.icon+" mdi-32px"}></i></a></li>
                  ))
                  :<div></div>
                }
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
