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
	toolbar: {
		textAlign: 'center',
		justifyContent: 'center'
	},
	menuItem: {
		textDecoration: 'none',
		marginRight: theme.spacing.unit * 2,
		color: theme.palette.background.paper,
		transition: 'all ease 0.5s'
	},
	menuItemActive: {
		backgroundColor: '#ddd',
		color: '#f00'
	},
	menuItemSpan: {
		fontSize: '25px',
		fontWeight: '100',
		color: 'inherit'
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
					<Toolbar className={classes.toolbar}>
						<NavLink exact to="/" className={classes.menuItem} activeStyle={{color: "#ff4081"}}>
							<Typography component="span" className={classes.menuItemSpan}>#Подвезу</Typography>
						</NavLink>
						<NavLink to="/passenger/" className={classes.menuItem} activeStyle={{color: "#ff4081"}}>
							<Typography component="span" className={classes.menuItemSpan}>#Подвезите</Typography>
						</NavLink>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles)(Menu);