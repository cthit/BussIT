import React, { Component } from 'react';
import '../../App.css';
let FontAwesome = require('react-fontawesome');
let moment = require('moment');
require('moment/locale/sv.js');
moment.locale('sv');

class DepartureItem extends Component {

  render() {
    const bgColor = this.props.data.bgColor;
    const fgColor = this.props.data.fgColor;
    const sname = this.props.data.sname;
    const direction = this.props.data.direction;
    const rtDate = this.props.data.rtDate;
    const rtTime = this.props.data.rtTime;
    const nextRtDate = this.props.data.nextRtDate;
    const nextRtTime = this.props.data.nextRtTime;
    const accessibility = this.props.data.accessibility;
    const nextAccessibility = this.props.data.nextAccessibility;

    const spanStyle = {
      color: bgColor,
      backgroundColor: fgColor,
      padding: '0.1em 0.3em',
      borderRadius: '0.2em'
    };

    const now = rtDate + ' ' + rtTime;
    const next = nextRtDate + ' ' + nextRtTime;

    return (
      <li className="widget-list-item">
        <div className="line">
          <span style={spanStyle}>
            {sname}
          </span>
        </div>
        <div className="destination">
          {direction}
        </div>
        <div className="departs">
          {
            moment(now, "YYYY-MM-DD HH:mm").fromNow() +
            accessibility === 'wheelchair' ? <FontAwesome className="accessibility-icon" name='wheelchair' /> : ''
          }
        </div>
        <div className="next-departure">
          {
            moment(next, "YYYY-MM-DD HH:mm").fromNow() +
            nextAccessibility === 'wheelchair' ? <FontAwesome className="accessibility-icon" name='wheelchair' /> : ''
          }
        </div>
      </li>
    );
  }
}

export default DepartureItem;
