import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Firebase
import * as firebase from 'firebase'

// Material
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class Driver extends Component {
	constructor(){
		super();
		this.state = {
			name: '',
			start: '',
			end: '',
			time: '',
			details: '',
			items: [],
			speed: 15
		};
	}

	handleForm = event => {
		event.preventDefault();

		const rootRef = firebase.database().ref('drivers');

		let currentDate = new Date();
		
		const date = {
			timestamp: currentDate,
			year: currentDate.getFullYear(),
			month: currentDate.getMonth(),
			date: currentDate.getDate(),
			hours: currentDate.getHours(),
			minutes: currentDate.getMinutes()
		}

		const item = {
			name: this.state.name,
			start: this.state.start,
			end: this.state.end,
			time: this.state.time,
			details: this.state.details,
			dateSend: date
		}

		rootRef.push(item);
		this.setState({
			name: "",
			start: "",
			end: "",
			time: "",
			details: ""
		});
	}
	
	handleChange = event => {
		
		const name = event.target.name;
		const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
  	const { classes } = this.props;
    return (
      <section className='section'>
        <div className="container">
        	<Typography component="h1" variant="h3">#Подвезу</Typography>
        	<Typography component="h2" variant="h6" gutterBottom>Заполните форму, чтобы добавить объявление о поездке</Typography>
		      <form onSubmit={this.handleForm} noValidate autoComplete="off">
		      	<TextField
		          label="Имя и фамилия"
		          value={this.state.name}
		          name="name"
		          onChange={this.handleChange}
		          margin="normal"
		          className={classes.textField}
		          variant="outlined"
		        />
		        <TextField
		          label="Откуда"
		          value={this.state.start}
		          name="start"
		          onChange={this.handleChange}
		          margin="normal"
		          className={classes.textField}
		          variant="outlined"
		        />
		        <TextField
		          label="Куда"
		          value={this.state.end}
		          name="end"
		          onChange={this.handleChange}
		          margin="normal"
		          className={classes.textField}
		          variant="outlined"
		        />
		        <TextField
		          label="Время"
		          value={this.state.time}
		          name="time"
		          onChange={this.handleChange}
		          margin="normal"
		          className={classes.textField}
		          variant="outlined"
		        />
		        <TextField
		          label="Примечания"
		          value={this.state.details}
		          name="details"
		          onChange={this.handleChange}
		          margin="normal"
		          className={classes.textField}
		          variant="outlined"
		        />
		        <Button type="submit" variant="contained" size="large" color="primary" className={classes.button}>
			        Заполнить форму
			      </Button>
		      </form>
        </div>
      </section>
    )
  }
}

Driver.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Driver);