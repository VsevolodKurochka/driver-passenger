import React, {Component} from 'react';
import './styles/home.css';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
          <section className="home-greeting">
              <div className="container">
                  <h1 className="home-greeting__title">
                      Driver/Passenger
                  </h1>
                  <div className="home-greeting__subtitle">
                      If you are a driver, then give a ride to a person for free, make him feel good.
                      <br />
                      If you are a passenger, leave a request and they will take you free.
                  </div>
                  <div className="home-greeting__buttons">
                      <Button to={'/driver'} size="large" variant="contained" component={NavLink} color="primary">I'm a driver</Button>
                      <Button to={'/passenger'} size="large" variant="contained" component={NavLink} color="secondary">I'm a passenger</Button>
                  </div>
              </div>

          </section>
        );
    }
}