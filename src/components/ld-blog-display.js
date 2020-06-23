import React, { Component } from 'react'

import ReadThisBlog from './blogs/ld-readthisblog'
import EscapeDRMBlog from './blogs/ld-escapeblog'
import ForEachBlog from './blogs/ld-foreachblog'
import FreeCodeBlog from './blogs/ld-freecodecamp'

// Keep: onClick={this.blogSelector('1')}
class BlogDisplay extends Component {
  displaySelection() {
    if (this.props.blog === '0') {
      return (
        <ReadThisBlog />
      )
    }
    if (this.props.blog === '1') {
      return (
        <EscapeDRMBlog />
      )
    }
    if (this.props.blog === '2') {
      return (
        <ForEachBlog />
      )
    }
    if (this.props.blog === '3') {
      return (
        <FreeCodeBlog />
      )
    }
  }

  render() {
    return (
      <div className='blog-display'>
        {this.displaySelection()}
      </div>
    )
  }
}

export default BlogDisplay
