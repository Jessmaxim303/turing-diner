import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
	constructor() {
		super()
		this.state = {
			id: '',
			name: '',
			date: '',
			time: '',
			number: ''
		}
	}

	handleChange = e => {
    this.setState( { [e.target.name]: e.target.value})
	}

	submitRes = e => {
    e.preventDefault();
    // this.props.updateState( {id: Math.random(), name: this.state.name, date: this.state.date, time: this.state.time, number: this.state.number )
  }

	render() {
		return(
      <form>
        <input
          type='text'
          value={this.state.name}
          name='name'
          placeholder='Name'
          onChange={this.handleChange}
        />
        <input
          type='text'
          name="date"
          value={this.state.date}
          placeholder='Date'
          onChange={this.handleChange}
        />
        <input
          type='text'
          name="time"
          value={this.state.time}
          placeholder='Time'
          onChange={this.handleChange}
        />
        <input
          type='text'
          name="number"
          value={this.state.number}
          placeholder='Guest Count'
          onChange={this.handleChange}
        />
        <button className="form_submit" onCLick={this.submitRes}>Submit</button>
       </form>
			)
	}
}

export default Form;