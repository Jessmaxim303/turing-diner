import React, { Component } from 'react';
import './ResContainer.css';

class ResContainer extends Component {
	constructor() {
		super();
		this.state = {}
	}

	deleteRes = id => {
		const guests = this.state.bookings.filter(guest => guest.id !== id)
		this.setState({bookings: guests})
	}

	render() {
		return this.props.data.bookings.map(guest => {
		return(
			<article className="res_main-container">
        <h1 className="res_title">{guest.name}</h1>
        <h3 className="res_date">{guest.date}</h3>
        <h3 className="res_time">{guest.time}</h3>
        <h3 className="res_number">{guest.number}</h3>
        <button className="res_cancel-button" onClick={() => this.deleteRes(guest.id)}>Cancel</button>
      </article>
			)
		})
	}
}

export default ResContainer;