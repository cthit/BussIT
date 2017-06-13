import React, { Component } from 'react';
import '../../App.css';

class DepartureItem extends Component {
  render() {
    return (
      <li className="widget-list-item">
        <div className="line">{this.props.data.line}</div>
        <div className="destination">{this.props.data.destination}</div>
        <div className="departs">{this.props.data.departure}</div>
        <div className="next-departure">{this.props.data.nextDeparture}</div>
      </li>
    );
  }
}

export default DepartureItem;
