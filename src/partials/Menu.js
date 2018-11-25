import React, { Component } from 'react'
import PropTypes from 'prop-types'


import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import { NavLink } from "react-router-dom"
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
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
});

class Menu extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired
	}

	render(){
		const { classes } = this.props;

		return(
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<NavLink to="/" style={{ textDecoration: 'none', 'color': 'inherit'}}><Typography component="span">#Подвезу</Typography></NavLink>
						<NavLink to="/passenger/" style={{ textDecoration: 'none', 'color': 'inherit'}}><Typography component="span">#Подвезите</Typography></NavLink>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles)(Menu);