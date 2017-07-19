import React, { Component } from 'react';
import '../../App.css';
import 'font-awesome/css/font-awesome.css'
let moment = require('moment');
require('moment/locale/sv.js');
moment.locale('sv');

moment.updateLocale('sv', {
    relativeTime : {
        future: "%s",
        past:   "%s sedan",
        s  : '< 1 min',
        ss : '%d s',
        m:  "1 min",
        mm: "%d min",
        h:  "1 tim",
        hh: "%d tim"
    }
});

class DepartureItem extends Component {

  checkAccessibility(accessibility) {
    switch (accessibility) {
      case 'wheelChair':
        return (
          <i className="accessibility-icon fa fa-wheelchair"></i>
        );
      case 'lowCarriage':
        return (
          <i className="accessibility-icon fa fa-universal-access"></i>
        );
      default:
        return;
    }
  }

  render() {
    const bgColor = this.props.data.bgColor;
    const fgColor = this.props.data.fgColor;
    const sname = this.props.data.sname;
    const direction = this.props.data.direction;
    const track = this.props.data.track;
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
      borderRadius: '0.2em',
      width: '40px',
      height: '35px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
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
        <div className="track">
          {track}
        </div>
        <div className="departs">
          {
            this.checkAccessibility(accessibility)
          }
          {
            moment(now, "YYYY-MM-DD HH:mm").fromNow() !== 'Invalid date' ?
              moment(now, "YYYY-MM-DD HH:mm").fromNow() : ''
          }
        </div>
        <div className="next-departure">
          {
            this.checkAccessibility(nextAccessibility)
          }
          {
            moment(next, "YYYY-MM-DD HH:mm").fromNow() !== 'Invalid date' ?
              moment(next, "YYYY-MM-DD HH:mm").fromNow() : ''
          }
        </div>
      </li>
    );
  }
}

export default DepartureItem;
