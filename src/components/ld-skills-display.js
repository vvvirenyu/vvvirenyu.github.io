import React, { Component } from 'react'

import ReadThisBlog from './skills/ld-readthisblog'
import EscapeDRMBlog from './skills/ld-escapeblog'
import ForEachBlog from './skills/ld-foreachblog'
import FreeCodeBlog from './skills/ld-freecodecamp'

// Keep: onClick={this.blogSelector('1')}
class SkillsDisplay extends Component {
  displaySelection() {
    if (this.props.skills === '0') {
      return (
        <ReadThisBlog />
      )
    }
    if (this.props.skills === '1') {
      return (
        <EscapeDRMBlog />
      )
    }
    if (this.props.skills === '2') {
      return (
        <ForEachBlog />
      )
    }
    if (this.props.skills === '3') {
      return (
        <FreeCodeBlog />
      )
    }
  }

  render() {
    return (
      <div className='skills-display'>
        {this.displaySelection()}
      </div>
    )
  }
}

export default SkillsDisplay
