import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeView from './homeView';
import ProjectView from './projectView'
import BlogView from './blogView'
import ApiView from './apiView'

const ViewMaster = () => (
  <div id='layout'>
    <Switch>
      <Route path='/' exact component={HomeView} />
      <Route path='/projects' exact component={ProjectView} />
      <Route path='/blog' exact component={BlogView} />
      <Route path='/api' exact component={ApiView} />
    </Switch>
  </div>
)

export default ViewMaster
