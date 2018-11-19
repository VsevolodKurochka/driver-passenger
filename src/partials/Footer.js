import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Material
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

// Bootstrap
import { Container } from 'reactstrap'

const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
	}
});

class Footer extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired
	}

	render(){
		const { classes } = this.props;

		return(
			<div>
				<footer className={classes.root}>
	        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">Ⓒ Всеволод Курочка</Typography>
				</footer>
				
			</div>
		);
	}
}

export default withStyles(styles)(Footer);