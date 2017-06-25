import React, { Component } from 'react';
import '../../App.css';
import BusStop from './bus-stop';
import { API, stops } from '../widget-settings';


class Vasttrafik extends Component {
  addBusStops() {
    return stops.map( (e, i) => <BusStop key={i} data={e} />);
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
