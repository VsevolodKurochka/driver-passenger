import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom"
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
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
	menuItemSpan: {
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
							<Typography component="span" className={classes.menuItemSpan}>
								Driver mode
							</Typography>
						</NavLink>
						<NavLink to="/passenger/" className={classes.menuItem} activeStyle={{color: "#ff4081"}}>
							<Typography component="span" className={classes.menuItemSpan}>
								Passenger mode
							</Typography>
						</NavLink>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles)(Menu);