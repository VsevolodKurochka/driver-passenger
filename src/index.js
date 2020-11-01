// General
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Menu from './partials/Menu'
import Footer from './partials/Footer'
import Driver from './pages/Driver'
import Passenger from './pages/Passenger'
import Home from './pages/Home';
import './index.css'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    background: {
      default: "#191919"
    }
  }
});

ReactDOM.render(
	<Router>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
    	<Route exact path="/" component={Home} />
	    <Route path="/driver" component={Driver} />
	    <Route path="/passenger/" component={Passenger} />
    </MuiThemeProvider>
  </Router>,
	document.getElementById('root')
)