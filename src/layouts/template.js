// React
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Material Design
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip'

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
	fixed: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
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
					<form onSubmit={this.props.handleForm} autoComplete="off">
						<TextField
							label={this.props.inputs[0].label}
							value={this.props.inputs[0].value}
							name={this.props.inputs[0].name}
							onChange={this.props.inputChange}
							margin="normal"
							className={classes.textField}
						/>
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
				<Tooltip title="Нажмите, чтобы открыть форму">
	        <Button variant="fab" color="secondary" className={classes.fixed}>
	          <AddIcon />
	        </Button>
	      </Tooltip>
			</section>
		)
	}
}

export default withStyles(styles)(Template);