import React, { Component } from 'react';
import {connect} from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {

  addPassenger = (event) => {
    this.props.dispatch({
      type: 'SET_PASSENGER',
      payload: event.target.value
    });
  }

  displayPassenger = () => {
    
  }

  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input type="text" name="name" placeholder="Enter Name" onChange={this.addPassengers}/>
        <button>Add Passenger</button>

        <ul>PASSENGER LIST:
          <li>{this.props.passengers}</li>
        </ul>
      
      </div>
    )
  }
}
const mapStateToProps = (reduxState) => ({
  passengers: reduxState.passengers.passengers
});
export default connect(mapStateToProps)(Passengers);