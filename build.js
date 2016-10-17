import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Create from './lib/Create'
import Active from './lib/ActiveGame'
import Index from './lib/Index'

render((
  <Router history={ hashHistory }>
    <Route path="/" component={ Index }/>
    <Route path="/create" component={ Create }/>
    <Route path="/active/:game_id" component={ Active }/>
  </Router>
), document.getElementById('app'))
