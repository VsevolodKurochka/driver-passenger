import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InputMask from 'react-input-mask'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import DateFnsUtils from '@date-io/date-fns'
import { TimePicker } from 'material-ui-pickers'
import { DatePicker } from 'material-ui-pickers'
import ruLocale from 'date-fns/locale/ru'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import SimpleCard from '../partials/SimpleCard'
import './style.css';

const styles = theme => ({
	section: {
		paddingTop: 45,
		paddingBottom: 45
	},
	header: {
		marginBottom: 30
	},
	title: {
		fontWeight: 'bold',
		color: "#fff"
	},
	subtitle: {
		color: "#fff"
	},
	textField: {
		width: "100%",
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		marginBottom: theme.spacing.unit * 3
	},
	pickers: {
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
			<section className={classes.section}>
				<div className={`container ${classes.header}`}>
					<Typography component="h1" variant="h2" gutterBottom className={classes.title}>
						{this.props.title}
					</Typography>
					<Typography component="h5" variant="h5" className={classes.subtitle}>
						{this.props.subtitle}
					</Typography>
				</div>
				<div className={"container " + classes.container}>
					{
						this.props.items.length ?
							<div className="grid-list">
								{
									this.props.items.map( (item, index) => {
										return(
											<SimpleCard 
												name={item.name}
												start={item.start}
												end={item.end}
												day={item.day}
												time={item.time}
												phone={item.phone}
												details={item.details}
												key={index} 
											/>
										)
									})
								}
							</div>
						:
						<Typography component="h4" variant="h6" color={'error'} align="center">
							There are no active trips. Be the first to add an ad.
						</Typography>
					}
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
					<DialogTitle>Fill the form</DialogTitle>
					<DialogContent>
						<DialogContentText>
							To add your ad to the general feed.
						</DialogContentText>
						<form onSubmit={this.props.handleForm} autoComplete="off">
							<TextField
								label={this.props.inputs[0].label}
								value={this.props.inputs[0].value}
								name={this.props.inputs[0].name}
								onChange={this.props.inputChange}
								className={classes.textField}
								required
							/>
							<div className="row">
								<div className="col-12 col-sm-6">
									<TextField
										label={this.props.inputs[1].label}
										value={this.props.inputs[1].value}
										name={this.props.inputs[1].name}
										onChange={this.props.inputChange}
										className={classes.textField}
										required
									/>
								</div>
								<div className="col-12 col-sm-6">
									<TextField
										label={this.props.inputs[2].label}
										value={this.props.inputs[2].value}
										name={this.props.inputs[2].name}
										onChange={this.props.inputChange}
										className={classes.textField}
										required
									/>
								</div>
							</div>
							<MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
								<div className="row">
									<div className="col-12 col-sm-6">
										<DatePicker 
											value={this.props.inputs[3].value} 
											label={this.props.inputs[3].label} 
											onChange={this.props.handleDateChange}
											format="dd/MM/yyyy"
											mask={value =>
												value
													? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
													: []
											}
											className={classes.textField + " " + classes.pickers}
											cancelLabel="Close"
											okLabel="Confirm"
											disablePast={true}
											required
										/>
									</div>
									<div className="col-12 col-sm-6">
										<TimePicker 
											value={this.props.inputs[4].value} 
											ampm={false}
											label={this.props.inputs[4].label} 
											onChange={this.props.handleTimeChange}
											className={classes.textField + " " + classes.pickers}
											cancelLabel="Close"
											okLabel="Confirm"
											required
										/>
									</div>
									
								</div>
							</MuiPickersUtilsProvider>

							<InputMask
								mask="+38 (999) 999 99 99"
								value={this.props.inputs[5].value}
								onChange={this.props.inputChange}
							>
								{() => <TextField
									label={this.props.inputs[5].label}
									value={this.props.inputs[5].value}
									name={this.props.inputs[5].name}
									onChange={this.props.inputChange}
									className={classes.textField}
									required
									/>
								}
							</InputMask>
							<TextField
								label={this.props.inputs[6].label}
								value={this.props.inputs[6].value}
								name={this.props.inputs[6].name}
								onChange={this.props.inputChange}
								className={classes.textField}
							/>
							<Button type="submit" variant="contained" size="large" color="primary" fullWidth={true} className={classes.button}>
								Create ad
							</Button>
						</form>
					</DialogContent>
				</Dialog>
			</section>
		)
	}
}

export default withStyles(styles)(Template);