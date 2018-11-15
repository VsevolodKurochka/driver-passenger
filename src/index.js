import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css'

import Menu from './partials/Menu'

import Driver from './components/Driver'
import Passenger from './components/Passenger'

ReactDOM.render(
	<Router>
    <div>
    	<Menu />
	    <Route exact path="/" component={Driver} />
	    <Route path="/passenger/" component={Passenger} />
    </div>
  </Router>,
	document.getElementById('root')
)