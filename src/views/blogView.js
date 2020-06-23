import React, { Component } from 'react';

import Blog from '../components/ld-blog'
import Header from '../components/ld-header'
import '../App.css';

class BlogView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      work: 'off',
      descript: '0',
      contact: 'off',
      blog: 'index',
      bio: 'a',
    }

    this.getInitialState = this.getInitialState.bind(this)
    this.selectBlog = this.selectBlog.bind(this)
  }

  getInitialState() {
    this.setState({
      work: 'off',
      contact: 'off',
      blog: 'off',
      bio: 'a',
    })
  }

  selectBlog(blog) {
    this.setState({
      blog: blog,
    })
  }

  render() {
    return (
      <div className='App container'>
        <Header
          getInitialState={this.getInitialState}
        />

        <Blog
          blog={this.state.blog}
          changeToBlogIndex={this.changeToBlogIndex}
          selectBlog={this.selectBlog}
          work={this.state.work}
        />
      </div>
    );
  }
}

export default BlogView;
