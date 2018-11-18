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
	heroUnit: {
		backgroundColor: theme.palette.background.paper,
	},
	heroContent: {
		maxWidth: 600,
		margin: '0 auto',
		padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
	},
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
	render() {
		const { classes } = this.props;
		return (
			<section className='section'>
				<div className={classes.heroUnit}>
					<div className={classes.heroContent}>
						<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.title}>
							{this.props.title}
						</Typography>
					</div>
				</div>
				<div className="container">
					<form onSubmit={this.props.handleForm} noValidate autoComplete="off">
						{
							this.props.inputs.map( (input,index) => {
								return (
									<TextField
										label={input.label}
										value={input.value}
										name={input.name}
										onChange={this.props.inputChange}
										margin="normal"
										className={classes.textField}
										variant="outlined"
										key={`Input: ${index}`}
									/>
								)
							})
						}
						<Button type="submit" variant="contained" size="large" color="primary" className={classes.button}>
							Заполнить форму
						</Button>
					</form>
					<Row>
						{
							this.props.items.length ?
								this.props.items.map( (item, index) => {
									return(
										<SimpleCard 
											name={item.name}
											start={item.start}
											end={item.end}
											time={item.time}
											phone={item.phone}
											details={item.details}
											key={index} 
										/>
									)
								})
							:
							<div>
								<p>Нету элементов</p>
							</div>
						}
					</Row>
				</div>
			</section>
		)
	}
}

export default withStyles(styles)(Template);