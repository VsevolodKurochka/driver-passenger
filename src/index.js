// General
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'


import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Partials
import Menu from './partials/Menu'
import Footer from './partials/Footer'

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


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    background: {
      default: "#fafafa"
    }
  }
});

ReactDOM.render(
	<Router>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
    	<Menu />
	    <Route exact path="/" component={Driver} />
	    <Route path="/passenger/" component={Passenger} />
      <Footer />
    </MuiThemeProvider>
  </Router>,
	document.getElementById('root')
)