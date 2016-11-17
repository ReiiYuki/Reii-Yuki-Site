import React, { Component } from 'react'
import {queryFromFireBase} from '../../../connector/Firebase'

export default class FilesContainer extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  setFireCredit(self,data){
    self.setState({
      files : data
    })
  }
  componentDidMount(){
    queryFromFireBase(this,'info_file',this.setFireCredit)
  }
  render(){
    return (
      <div>
        <div className="row">
          <h1 className="condensed light white-text">
            Download Infomation
          </h1>
        </div>
        {
          this.state.files?
          this.state.files.map((file)=>(
            <div key={"files-"+this.state.files.indexOf(file)} className="row">
              <div className="col s12">
                <a href={file.path} className="btn waves-light wave-effect">
                  {"Download "+file.type}
                </a>
              </div>
            </div>
          )):<div></div>
        }
      </div>
    )
  }
}
