import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Create from './lib/Create'
import Active from './lib/ActiveGame'

render((
  <Router history={ hashHistory }>
    <Route path="/" component={ Create }/>
    <Route path="/active" component={ Active }/>
  </Router>
), document.getElementById('app'))
