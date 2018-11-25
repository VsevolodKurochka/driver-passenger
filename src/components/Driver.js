// React
import React, { Component } from 'react'

// Firebase
import * as firebase from 'firebase'

// Template
import Template from '../layouts/Template'
import TimeInput from 'material-ui-time-picker'

export default class Driver extends Component {

	state = {
		name: "",
		start: "",
		end: "",
		day: new Date(),
		time: new Date(),
		phone: "",
		details: "",
		statusModalOpen: false,
		items: []
	}

	functionModalOpen = () => {
		this.setState({statusModalOpen: true})
	}
 	functionModalClose = () => {
 		this.setState({statusModalOpen: false})
 	}
 
	handleForm = event => {
		event.preventDefault();

		const rootRef = firebase.database().ref('drivers');

		// Date send
		let currentDate = new Date();
		const dateSend = {
			timestamp: currentDate,
			year: currentDate.getFullYear(),
			month: currentDate.getMonth(),
			date: currentDate.getDate(),
			hours: currentDate.getHours(),
			minutes: currentDate.getMinutes()
		}

		// Day
		let stateDay = this.state.day;
		const day = stateDay.getDate() + '.' + (stateDay.getMonth() < 12 ? stateDay.getMonth() + 1 : 1) + '.' + stateDay.getFullYear();

		// Time
		let stateTime = this.state.time;
		const time = 
			(stateTime.getHours() < 10 ? "0" + stateTime.getHours() : stateTime.getHours())
			+ 
			':' 
			+ (stateTime.getMinutes() < 10 ? "0" + stateTime.getMinutes() : stateTime.getMinutes());

		const item = {
			name: this.state.name,
			start: this.state.start,
			end: this.state.end,
			day: day,
			time: time,
			phone: this.state.phone,
			details: this.state.details,
			dateSend: dateSend
		}

		// Push to DB
		rootRef.push(item);

		// Clear state
		this.setState({
			name: "",
			start: "",
			end: "",
			day: new Date(),
			time: new Date(),
			phone: "",
			details: "",
			statusModalOpen: false
		});

	}
	
	handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value,
		});
	}

	handleTimeChange = (date) => {
		this.setState({
			time: date
		});
	}

	handleDateChange = (date) => {
		this.setState({
			day: date
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
					day: items[item].day,
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
			<div>
				<Template
					title="#Подвезу"
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
								name: "day",
								label: "День",
								value: this.state.day
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
					handleTimeChange={this.handleTimeChange}
					handleDateChange={this.handleDateChange}

					statusModalOpen={this.state.statusModalOpen}
					functionModalOpen={this.functionModalOpen}
					functionModalClose={this.functionModalClose}
					
					items={this.state.items}
				/>
				
			</div>
			
		)
	}
}