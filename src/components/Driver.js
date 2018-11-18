// React
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Firebase
import * as firebase from 'firebase'

// Template
import Template from '../layouts/template'


export default class Driver extends Component {

	state = {
		name: "",
		start: "",
		end: "",
		time: "",
		phone: "",
		details: "",
		items: []
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
			phone: this.state.phone,
			details: this.state.details,
			dateSend: date
		}

		// Push to DB
		rootRef.push(item);

		// Clear state
		this.setState({
			name: "",
			start: "",
			end: "",
			time: "",
			phone: "",
			details: ""
		});
	}
	
	handleChange = event => {
		
		const name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value,
		});
	}

	componentDidMount(){
		const rootRef = firebase.database().ref('drivers');

		rootRef.on('value', (snapshot) => {
			let items = snapshot.val();
			
			let currentItems = [];

			for(let item in items){
				currentItems.unshift({
					name: items[item].name,
					start: items[item].start,
					end: items[item].end,
					time: items[item].time,
					phone: items[item].phone,
					details: items[item].details
				})
			}
			
			this.setState({
				items: currentItems
			});

		});
	}

	render() {
		const { classes } = this.props;
		return (
			<Template
				title="Driver"
				subtitle="Driver"
				handleForm={this.handleForm}
				inputs={
					[
						{
							name: "name",
							label: "Имя",
							value: this.state.name
						},
						{
							name: "start",
							label: "Откуда",
							value: this.state.start
						},
						{
							name: "end",
							label: "Куда",
							value: this.state.end
						},
						{
							name: "time",
							label: "Время",
							value: this.state.time
						},
						{
							name: "phone",
							label: "Телефон",
							value: this.state.phone
						},
						{
							name: "details",
							label: "Примечания",
							value: this.state.details
						}
					]
				}
				inputChange={this.handleChange}
			/>
		)
	}
}