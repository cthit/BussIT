import React, { Component } from 'react';
import '../../App.css';
import BusStop from './bus-stop'

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

class Vasttrafik extends Component {
  addBusStops() {
    return stops.map( (e, i) => <BusStop key={i} data={e} url={this.props.url} />)
  }

  render() {
    return (
      <div className="widget vasttrafik">
        {this.addBusStops()}
      </div>
    );
  }
}

export default Vasttrafik;
