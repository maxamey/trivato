import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Create from './lib/Create'
import Active from './lib/ActiveGame'
import Summary from './lib/Summary'

render((
  <Router history={ hashHistory }>
    <Route path="/" component={ Create }/>
    <Route path="/active/:game_id" component={ Active }/>
    <Route path="/summary"/>
  </Router>
), document.getElementById('app'))
