import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
    	padding: theme.spacing.unit * 3,
	}
});

class Footer extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired
	}

	render(){
		return(
			<footer className={this.props.classes.root}>
				<Typography
					variant="subtitle1"
					align="center"
					color="textSecondary"
					component="p">Ⓒ Vsevolod Kurochka</Typography>
			</footer>
		);
	}
}

export default withStyles(styles)(Footer);