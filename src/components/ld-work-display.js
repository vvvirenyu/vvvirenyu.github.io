import React, { Component } from 'react'

import ThumbSim from '../assets/simon-joe.png'
import ThumbGil from '../assets/ganesh.png'
import ThumbHyp from '../assets/hypno-timer.png'
import ThumbTic from '../assets/ttt.png'
import ThumbWea from '../assets/weather.png'
import ThumbWik from '../assets/wikisearch.png'

class WorkDisplay extends Component {
  showDescription(num) {
    this.props.getDescription(num)
  }

  describer() {
    if (this.props.descript === '0') {
      return (
        <p className='proj-desc'>
          a selection of recent works
        </p>
      )
    }
    if (this.props.descript === '1') {
      return (
        <p className='proj-desc'>
          a pattern-based memory test proctored by the mercurial Simon Joe
        </p>
      )
    }
    if (this.props.descript === '2') {
      return (
        <p className='proj-desc'>
          an extra spooky and highly-configurable 4x4 tic-tac-toe deathmatch
        </p>
      )
    }
    if (this.props.descript === '3') {
      return (
        <p className='proj-desc'>
          a hypnotic timing device for pomodoro training or cooking pot roasts
        </p>
      )
    }
    if (this.props.descript === '4') {
      return (
        <p className='proj-desc'>
          a fast and easy wikipedia searcher using AJAX to call data from the API
        </p>
      )
    }
    if (this.props.descript === '5') {
      return (
        <p className='proj-desc'>
          a stylish way to check the local weather using data from the OpenWeatherMap API
        </p>
      )
    }
    if (this.props.descript === '6') {
      return (
        <p className='proj-desc'>
          a luminous website made for a local pop group, made with react
        </p>
      )
    }
  }

  render() {
    return (
      <div className='work-display'>
        {this.describer()}
        <div className='thumbnail-box'>
          <div className='first row'>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '1')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='https://simon-joe.herokuapp.com' target='blank'>
                <img className='thumbnail' src={ThumbSim} alt=''/>
              </a>
            </div>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '2')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='http://tictactorment.herokuapp.com' target='blank'>
                <img className='thumbnail' src={ThumbTic} alt=''/>
              </a>
            </div>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '3')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='http://hypno-timer.herokuapp.com' target='blank'>
                <img className='thumbnail' src={ThumbHyp} alt=''/>
              </a>
            </div>
          </div>
          <div className='second row'>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '4')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='http://zenradsyndicate.com/wikisearch.html' target='blank'>
                <img className='thumbnail' src={ThumbWik} alt=''/>
              </a>
            </div>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '5')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='http://gilganesh.com/ACE/weather.html' target='blank'>
                <img className='thumbnail' src={ThumbWea} alt=''/>
              </a>
            </div>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '6')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='http://gilganesh.com' target='blank'>
                <img className='thumbnail' src={ThumbGil} alt=''/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkDisplay
