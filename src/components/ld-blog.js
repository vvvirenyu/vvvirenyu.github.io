import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BlogList from './ld-blog-list'
import BlogDisplay from './ld-blog-display'

class Blog extends Component {
  blogToggle() {
    if (this.props.blog === 'off') {
      this.props.changeToBlogIndex()
    }
  }

  stateCheckBlog() {
    if (this.props.blog === 'off' && this.props.work === 'off') {
      return (
        <Link to='/blog'>
          <div className='blog-head' onClick={this.blogToggle.bind(this)}>
            <h4 id='blog-head-text'>
              EXPERIENCE
            </h4>
          </div>
        </Link>
      )
    }
    if (this.props.blog === 'index') {
      return (
        <div className='blog-index'>
          <h4 id='blog-head-index'>
          EXPERIENCE
          </h4>
          <BlogList
            blog={this.props.blog}
            selectBlog={this.props.selectBlog}
          />
        </div>
      )
    }
    if (this.props.blog === '0' ||
        this.props.blog === '1' ||
        this.props.blog === '2' ||
        this.props.blog === '3'  
      ) {
      return (
        <BlogDisplay
          blog={this.props.blog}
        />
      )
    }
  }

  render() {
    return (
      <div>
        {this.stateCheckBlog()}
      </div>
    )
  }
}

export default Blog
