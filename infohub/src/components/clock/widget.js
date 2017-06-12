import React, { Component } from 'react';
import '../../App.css';

class Clock extends Component {
  setTime() {
    var currentdate = new Date();
    var hours = currentdate.getUTCHours() + parseInt(this.props.UTCOffset);

      // correct for number over 24, and negatives
      if( hours >= 24 ){ hours -= 24; }
      if( hours < 0   ){ hours += 12; }

      // add leading zero, first convert hours to string
      hours = hours + "";
      if( hours.length === 1 ){ hours = "0" + hours; }

      // minutes are the same on every time zone
      var minutes = currentdate.getUTCMinutes();

      // add leading zero, first convert hours to string
      minutes = minutes + "";
      if( minutes.length === 1 ){ minutes = "0" + minutes; }

      var seconds = currentdate.getUTCSeconds();
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      this.setState({
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });
  }

  setDate() {
    var currentdate = new Date();
    var date = currentdate.getDate();
    var month = currentdate.getMonth();
    var year = currentdate.getFullYear();
    switch (month) {
      case 0:
        month = "Januari";
        break;
      case 1:
        month = "Februari";
        break;
      case 2:
        month = "Mars";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "Maj";
        break;
      case 5:
        month = "Juni";
        break;
      case 6:
        month = "Juli";
        break;
      case 7:
        month = "Augusti";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "Oktober";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
      default:

    }
    this.setState({
      date: date,
      month: month,
      year: year
    });
  }

  componentWillMount() {
    this.setTime();
    this.setDate();
  }

  componentDidMount() {
     window.setInterval(function () {
      this.setTime();
      this.setDate();
    }.bind(this), 1000);
  }

  render() {
    return (
      <div className="widget clock">
        <div className="time">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</div>
        <div className="date">{this.state.date} {this.state.month} {this.state.year}</div>
      </div>
    );
  }
}

export default Clock;
