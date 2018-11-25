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
		textDecoration: 'none',

		marginRight: theme.spacing.unit * 2
	},
	menuItemSpan: {
		fontSize: '25px',
		fontWeight: '100',
		color: theme.palette.background.paper
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
						<NavLink to="/" className={classes.menuItem}>
							<Typography component="span" className={classes.menuItemSpan}>#Подвезу</Typography>
						</NavLink>
						<NavLink to="/passenger/" className={classes.menuItem}>
							<Typography component="span" className={classes.menuItemSpan}>#Подвезите</Typography>
						</NavLink>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles)(Menu);