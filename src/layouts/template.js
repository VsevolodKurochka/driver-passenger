// React
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Material Design
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// Bootstrap
import { Row } from 'reactstrap'

// My components
import SimpleCard from '../partials/SimpleCard'

const styles = theme => ({
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	button: {
		margin: theme.spacing.unit,
	},
});

class Template extends Component {
	render() {
		const { classes } = this.props;
		return (
			<section className='section'>
				<div className="container">
					<Typography component="h1" variant="h3">{this.props.title}</Typography>
					<Typography component="h2" variant="h6" gutterBottom>{this.props.subtitle}</Typography>
				</div>
			</section>
		)
	}
}

Template.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Template);