import React, { Component } from 'react';
import './ResContainer.css';

class ResContainer extends Component {
	constructor() {
		super();
		this.state = { bookings: []}
	}

	componentDidMount() {
		fetch('http://localhost:3001/api/v1/reservations')
		.then(response => response.json())
		.then(data => this.setState( {bookings: data} ))
	}

	render() {
		return this.state.bookings.map(guest => {
		return(
			<article className="res_main-container">
        <h1 className="res_title">{guest.name}</h1>
        <h3 className="res_date">{guest.date}</h3>
        <h3 className="res_time">{guest.time}</h3>
        <h3 className="res_number">{guest.number}</h3>
        <button className="res_cancel-button">Cancel</button>
      </article>
			)
		})
	}
}

export default ResContainer;