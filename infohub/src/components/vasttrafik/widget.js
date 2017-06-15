import React, { Component } from 'react';
import '../../App.css';
import BusStop from './bus-stop'

class Vasttrafik extends Component {
  render() {
    const stops = [
      {
        name: 'Mossen',
        id: 9021014004830000
      },
      {
        name: 'Pilbågsgatan',
        id: 9021014005280000
      }
    ];
    function addBusStops() {
      return stops.map( (e, i) => <BusStop key={i} data={e} />)
    }
    return (
      <div className="widget vasttrafik">
        {addBusStops()}
      </div>
    );
  }
}

export default Vasttrafik;
