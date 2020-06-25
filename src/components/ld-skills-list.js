import React, { Component } from 'react'

// Use: onClick={this.blogSelector('1')}
class SkillsList extends Component {
  SkillsSelector(skillsID) {
    this.props.selectSkills(skillsID)
  }

  render() {
    return (
      <div className='skills-list'>
        <ul id='skills-list'>
          <li id='3' onClick={this.SkillsSelector.bind(this, '3')}>
            3: Teaching Assistant at NEW YORK UNIVERSITY
          </li>
          <li id='2' onClick={this.SkillsSelector.bind(this, '2')}>
            2: Junior Data Scientist at SUFFIXTREE TECHNOLOGIES
          </li>
          <li id='1' onClick={this.SkillsSelector.bind(this, '1')}>
            1: Frontend Developer at MEDITAB SOFTWARES LLC
          </li>
          <li id='0' onClick={this.SkillsSelector.bind(this, '0')}>
            0: Backend Developer at MEDITAB SOFTWARES LLC
          </li>
        </ul>
      </div>
    )
  }
}

export default SkillsList
