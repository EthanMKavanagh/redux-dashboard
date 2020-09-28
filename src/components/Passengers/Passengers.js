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

  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input type="text" name="name" placeholder="Enter Name" onChange={this.addPassenger}/>
        <button
          // onClick={this.addPassenger}
          // Implementing onChange={() => this.addPassenger}
          // How do you update ul on an onClick rather than an onChange? Can't grab the input value
          // through event.target.value inside of an onClick. The ul displays every time the input is changed
        >
          Add Passenger
        </button>

        <ul>PASSENGER:
          {this.props.passengers.map((passenger, i) =>
            <li key={i}>{passenger}</li>
          )}
        </ul>
      
      </div>
    )
  }
}
const mapStateToProps = (storeInstance) => ({
  passengers: storeInstance.passengers
});
export default connect(mapStateToProps)(Passengers);