import React, { Component } from 'react';
import {connect} from 'react-redux';
// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        
        <p>SPEED: GOES HERE</p>
        <p>PASSENGER COUNT: {this.props.speed}</p>
      </div>
    )
  }
}
const mapStateToProps = (storeInstance) => ({
  speed: storeInstance.speed
});
export default connect(mapStateToProps)(Dashboard);