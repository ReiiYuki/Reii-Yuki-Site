import React, { Component } from 'react'
import ProgressBar  from 'progressbar.js'
export default class HalfCircleProgressItem extends Component {
  initializeProgress(){
    this.bar = new ProgressBar.SemiCircle("#"+this.props.id, {
      strokeWidth: 6,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 1400,
      svgStyle: null,
      text: {
        value: '',
        alignToBottom: true
      },
      from: {color: '#ffffff'},
      to: {color: this.props.color},
      // Set default step function for all animate calls
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        bar.setText(this.props.rank)
        bar.text.style.color = state.color;
      }
    });
    this.bar.text.style.fontSize = '2rem';

    this.bar.animate(this.props.value)
  }

  componentDidMount(){
    this.initializeProgress()
  }
  render() {
    return (
      <div>
        <div id={this.props.id} className="condensed light" ></div>
        <div className={this.props.textColor}>
          <h4 className="condensed light center">{this.props.name}</h4>
        </div>
      </div>
    )
  }
}
