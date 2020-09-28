import React, { Component } from 'react';
import {connect} from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {

  increaseSpd = () => {
    this.props.dispatch({
      type: 'increase'
    });
  }

  decreaseSpd = () => {
    this.props.dispatch({
      type: 'decrease'
    });
  }

  render() {
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={this.increaseSpd}>Increase Speed</button>
        <p>SPEED: {this.props.speed}</p>
        <button onClick={this.decreaseSpd}>Decrease Speed</button>
      </div>
    )
  }
}
const mapStateToProps = (storeInstance) => ({
  speed: storeInstance.speed
});
export default connect(mapStateToProps)(SpeedControl);