import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';

import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuItem: {
    color: '#fff'
  },
  menuItemLink: {
    textDecoration: 'none'
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuItem classes={{root: classes.menuItem}}><Link to="/" style={{ textDecoration: 'none', 'color': 'inherit'}}>#Подвезу</Link></MenuItem>
          <MenuItem classes={{root: classes.menuItem}}><Link to="/passenger/" style={{ textDecoration: 'none', 'color': 'inherit'}}>#Подвезите</Link></MenuItem>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);