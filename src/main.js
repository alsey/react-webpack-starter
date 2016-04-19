import React from 'react'
import { Router, hashHistory /*browserHistory*/ } from 'react-router'
import { render } from 'react-dom'
import App from './components/App'
import './styles/main.scss'

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    // TODO: add module entry here
    require('./pages/Auth'),
    require('./pages/ContMgnt')
  ]  
}

render(
  <Router history={ hashHistory /*browserHistory*/ } routes={ routes } />,
  document.getElementById('root')
)
