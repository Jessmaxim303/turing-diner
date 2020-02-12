import React, { Component } from 'react';
import './App.css';

import ResContainer from '../ResContainer/ResContainer.js';
import Form from '../Form/Form.js'


class App extends Component {
  constructor() {
    super()
    this.state = { bookings: []}
  }

componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => this.setState( {bookings: data} ))
  }

  updateState = res => {
    console.log("res", res)
    this.setState( res )
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          < Form updateState={this.updateState}/>
          < ResContainer data={this.state}/>
        </div>
      </div>
    )
  }
}

export default App;
