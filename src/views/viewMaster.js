import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeView from './homeView';
import ProjectView from './projectView'
import SkillsView from './skillsView'
import ApiView from './apiView'
import ExpView from './expView'

const ViewMaster = () => (
  <div id='layout'>
    <Switch>
      <Route path='/' exact component={HomeView} />
      <Route path='/projects' exact component={ProjectView} />
      <Route path='/skills' exact component={SkillsView} />
      <Route path='/api' exact component={ApiView} />
      <Route path='/exp' exact component={ExpView} />
    </Switch>
  </div>
)

export default ViewMaster
