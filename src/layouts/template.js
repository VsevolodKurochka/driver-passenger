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

// Pickers
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import DateFnsUtils from '@date-io/date-fns'
import { TimePicker } from 'material-ui-pickers'
import { DatePicker } from 'material-ui-pickers'
import { DateTimePicker } from 'material-ui-pickers'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'


// My components
import SimpleCard from '../partials/SimpleCard'

const styles = theme => ({
	heroUnit: {
		backgroundColor: theme.palette.background.paper,
	},
	container: {
		marginTop: theme.spacing.unit * 5,
		marginBottom: theme.spacing.unit * 5
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
		width: "100%",
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		marginBottom: theme.spacing.unit * 2
	},
	pickers: {
		paddingLeft: 10,
		width: "100%"
	},
	button: {
		margin: theme.spacing.unit,
	},
	fixed: {
		position: 'fixed',
		bottom: theme.spacing.unit * 2,
		right: theme.spacing.unit * 3,
	}
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
				<div className={"container " + classes.container}>
					
					<div className="row">
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
					</div>
				</div>
				<Tooltip title="Нажмите, чтобы добавить ">
					<Button variant="fab" color="secondary" className={classes.fixed} onClick={this.props.functionModalOpen}>
						<AddIcon />
					</Button>
				</Tooltip>
				<Dialog
					open={this.props.statusModalOpen}
					onClose={this.props.functionModalClose}
					maxWidth='sm'
				>
					<DialogTitle>Заполните форму</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Чтобы добавить ваше объявление в общую ленту.
						</DialogContentText>
						<form onSubmit={this.props.handleForm} autoComplete="off">
							<TextField
								label={this.props.inputs[0].label}
								value={this.props.inputs[0].value}
								name={this.props.inputs[0].name}
								onChange={this.props.inputChange}
								className={classes.textField}
							/>
							<div className="row">
								<div className="col-12 col-sm-6">
									<TextField
										label={this.props.inputs[1].label}
										value={this.props.inputs[1].value}
										name={this.props.inputs[1].name}
										onChange={this.props.inputChange}
										className={classes.textField}
									/>
								</div>
								<div className="col-12 col-sm-6">
									<TextField
										label={this.props.inputs[2].label}
										value={this.props.inputs[2].value}
										name={this.props.inputs[2].name}
										onChange={this.props.inputChange}
										className={classes.textField}
									/>
								</div>
							</div>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<div className="row">
									<div className="col-12 col-sm-6">
										<DatePicker 
											value={this.props.inputs[3].value} 
											label={this.props.inputs[3].label} 
											onChange={this.props.handleDateChange}
											className={classes.pickers}
										/>
									</div>
									<div className="col-12 col-sm-6">
										<TimePicker 
											value={this.props.inputs[4].value} 
											ampm={false}
											label={this.props.inputs[4].label} 
											onChange={this.props.handleTimeChange}
											className={classes.pickers}
										/>
									</div>
									
								</div>
							</MuiPickersUtilsProvider>
							<TextField
								label={this.props.inputs[5].label}
								value={this.props.inputs[5].value}
								name={this.props.inputs[5].name}
								onChange={this.props.inputChange}
								className={classes.textField}
							/>
							<TextField
								label={this.props.inputs[6].label}
								value={this.props.inputs[6].value}
								name={this.props.inputs[6].name}
								onChange={this.props.inputChange}
								className={classes.textField}
							/>
							<Button type="submit" variant="contained" size="large" color="primary" fullWidth={true} className={classes.button}>
								Заполнить форму
							</Button>
						</form>
					</DialogContent>
				</Dialog>
			</section>
		)
	}
}

export default withStyles(styles)(Template);