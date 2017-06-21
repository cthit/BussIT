import React, { Component } from 'react';
import '../../App.css';
let moment = require('moment');
require('moment/locale/sv.js');
moment.locale('sv');

class DepartureItem extends Component {

  render() {

    const spanStyle = {
      color: this.props.data.bgColor,
      backgroundColor: this.props.data.fgColor,
      padding: '0.1em 0.3em',
      borderRadius: '0.2em'
    };

    const now = this.props.data.rtDate + ' ' + this.props.data.rtTime;
    const next = this.props.data.nextRtDate + ' ' + this.props.data.nextRtTime;

    return (
      <li className="widget-list-item">
        <div className="line">
          <span style={spanStyle}>
            {this.props.data.sname}
          </span>
        </div>
        <div className="destination">
          {this.props.data.direction}
        </div>
        <div className="departs">
          {moment(now, "YYYY-MM-DD HH:mm").fromNow()}
        </div>
        <div className="next-departure">
          {moment(next, "YYYY-MM-DD HH:mm").fromNow()}
        </div>
      </li>
    );
  }
}

export default DepartureItem;
