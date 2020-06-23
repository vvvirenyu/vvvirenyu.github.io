import React, { Component } from 'react'
import Work from '../components/ld-work'
import Header from '../components/ld-header'
import '../App.css'

class ProjectView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      work: 'on',
      descript: '0',
      contact: 'off',
      blog: 'off',
      bio: 'a',
    }
    this.getDescription = this.getDescription.bind(this)
    this.getInitialState = this.getInitialState.bind(this)
  }

  getInitialState() {
    this.setState({
      work: 'off',
      contact: 'off',
      blog: 'off',
      bio: 'a',
    })
  }

  getDescription(projectNum) {
    this.setState({
      descript: projectNum,
    })
  }

  render() {
    return (
      <div className='App container'>
        <Header
          getInitialState={this.getInitialState}
        />

        <Work
          blog={this.state.blog}
          changeWork={this.changeWork}
          descript={this.state.descript}
          getDescription={this.getDescription}
          work={this.state.work}
        />

      </div>
    )
  }
}

export default ProjectView
