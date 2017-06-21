import React, { Component } from 'react';
import '../../App.css';
let moment = require('moment');

class DepartureItem extends Component {

  constructor(props) {
      super(props);
      const now = this.props.data.rtDate + ' ' + this.props.data.rtTime;
      const next = this.props.data.nextRtDate + ' ' + this.props.data.nextRtTime;
      this.state = {
        departs: moment(now, "YYYY-MM-DD HH:mm").fromNow(),
        nextDeparture: moment(next, "YYYY-MM-DD HH:mm").fromNow()
      }
  }

  componentDidMount() {
    const now = this.props.data.rtDate + ' ' + this.props.data.rtTime;
    const next = this.props.data.nextRtDate + ' ' + this.props.data.nextRtTime;
     window.setInterval(function() {
      this.setState({
        departs: moment(now, "YYYY-MM-DD HH:mm").fromNow(),
        nextDeparture: moment(next, "YYYY-MM-DD HH:mm").fromNow()
      });
    }.bind(this), 1000);
  }

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
