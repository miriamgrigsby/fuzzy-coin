// React
import React from 'react'

// Styles
import './App.scss'

// Components
import Routes from './Routes'

// Router
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

export const App = () => {
  const history = createBrowserHistory()
  return (
    <Router history={history}>
      <Routes />
    </Router>
  )
}
