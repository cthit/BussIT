import React, { Component } from 'react';
import '../../App.css';

class DepartureItem extends Component {
  constructor(props) {
      super(props);
      this.state = {
        departs: this.props.data.rtTime,
        nextDeparture: this.props.data.nextRtTime
      }
  }

  render() {
    return (
      <li className="widget-list-item">
        <div className="line"><span>{this.props.data.sname}</span></div>
        <div className="destination">{this.props.data.direction}</div>
        <div className="departs">{this.state.departs}</div>
        <div className="next-departure">{this.state.nextDeparture}</div>
      </li>
    );
  }
}

export default DepartureItem;
