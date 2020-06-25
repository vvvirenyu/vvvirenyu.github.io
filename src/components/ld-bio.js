import React, { Component } from 'react'

class Bio extends Component {
  bioToggle() {
    if (this.props.bio === 'a') {
      this.props.changeBio('b')
    }
    if (this.props.bio === 'b') {
      this.props.changeBio('c')
    }
    if (this.props.bio === 'c') {
      this.props.changeBio('a')
    }
    console.log(this.props.bio)
  }

  stateCheckBio() {
    if (this.props.skills !== 'off' || this.props.work !== 'off') {
      return null
    }
    if (this.props.bio === 'a') {
      return (
        <div className='bio' onClick={this.bioToggle.bind(this)}>
          <h4 id='bio-text'>
            Python developer specializing in interesting
            aesthetics and creative solutions; devoted to the endless
            journey of self-improvement.
          </h4>
        </div>
      )
    }
    if (this.props.bio === 'b') {
      return (
        <div className='bio' onClick={this.bioToggle.bind(this)}>
          <h4 id='bio-text'>
            Linux enthusiast, skier and sound designer.
            a motivated individual and teammate; a provider of
            comic relief who knows timing is everything.
          </h4>
        </div>
      )
    }
    if (this.props.bio === 'c') {
      return (
        <div className='bio' onClick={this.bioToggle.bind(this)}>
          <h4 id='bio-text'>
            memetic practitioner, Socratic enquirer and student
            of many disciplines; a pragmatic realist ready and able
            to manifest positive contributions.
          </h4>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.stateCheckBio()}
      </div>
    )
  }
}

export default Bio
