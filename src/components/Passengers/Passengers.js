import React, { Component } from 'react';
import {connect} from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {

  state = {
    passenger: ''
  }

  addPassenger = (event) => {
    this.setState({
      passenger: event.target.value
    });
  }

  displayPassenger = () => {
    this.props.dispatch({
      type: 'SET_PASSENGER',
      payload: this.state.passenger
    });
  }

  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input type="text" name="name" placeholder="Enter Name" onChange={this.addPassenger}/>
        <button onClick={this.displayPassenger}>Add Passenger</button>

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