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
	title: {
		fontWeight: 'bold'
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	button: {
		margin: theme.spacing.unit,
	},
});

class Template extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired
	}
	constructor(){
		super();
	}
	render() {
		const { classes } = this.props;
		return (
			<section className='section'>
				<div className="container">
					<Typography component="h1" variant="h3" className={classes.title}>{this.props.title}</Typography>
					<Typography component="h2" variant="h6" gutterBottom>{this.props.subtitle}</Typography>
					<form onSubmit={this.props.handleForm} noValidate autoComplete="off">
						{
							this.props.inputs.map( (input,index) => {
								return <TextField
									label={input.title}
									value={input.value}
									name={input.name}
									onChange={this.props.inputChange}
									margin="normal"
									className={classes.textField}
									variant="outlined"
									key={`Input: ${index}`}
								/>
							})
						}
						<Button type="submit" variant="contained" size="large" color="primary" className={classes.button}>
							Заполнить форму
						</Button>
					</form>
				</div>
			</section>
		)
	}
}

export default withStyles(styles)(Template);