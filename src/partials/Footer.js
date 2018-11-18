import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Material
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'

// Bootstrap
import { Container } from 'reactstrap'

const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
	},
	fixed: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
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
				<Tooltip title="Нажмите, чтобы открыть форму">
	        <Button variant="fab" color="secondary" className={classes.fixed}>
	          <AddIcon />
	        </Button>
	      </Tooltip>
			</div>
		);
	}
}

export default withStyles(styles)(Footer);