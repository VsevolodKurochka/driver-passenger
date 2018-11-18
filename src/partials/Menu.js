import React from 'react';
import PropTypes from 'prop-types';


import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';

import { NavLink } from "react-router-dom";


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

	return (
		const { classes } = this.props;

		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<NavLink to="/" style={{ textDecoration: 'none', 'color': 'inherit'}}>#Подвезу</NavLink>
					<NavLink to="/passenger/" style={{ textDecoration: 'none', 'color': 'inherit'}}>#Подвезите</NavLink>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default withStyles(styles)(Menu);