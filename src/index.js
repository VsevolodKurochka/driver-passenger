// General
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css'

// Partials
import Menu from './partials/Menu'

// Components
import Driver from './components/Driver'
import Passenger from './components/Passenger'

// Firebase
import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyD19vjU4cTw_5Znaz2wYZRkYpEPfkIQbqo",
  authDomain: "cherkassy-aa040.firebaseapp.com",
  databaseURL: "https://cherkassy-aa040.firebaseio.com",
  projectId: "cherkassy-aa040",
  storageBucket: "",
  messagingSenderId: "1011221614650"
};
firebase.initializeApp(config);


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