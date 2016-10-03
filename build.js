import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Create from './lib/Create'

render((
  <Router history={ hashHistory }>
    <Route path="/" component={ Create }/>
  </Router>
), document.getElementById('app'))
