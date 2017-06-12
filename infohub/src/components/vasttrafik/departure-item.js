import React, { Component } from 'react';
import '../../App.css';

class DepartureItem extends Component {
  render() {
    return (
      <li className="widget-list-item">
        <div className="line">{this.props.line}</div>
        <div className="destination">{this.props.destination}</div>
        <div className="departs">{this.props.departure}</div>
        <div className="next-departure">{this.props.nextDeparture}</div>
      </li>
    );
  }
}

export default DepartureItem;
