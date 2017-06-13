import React, { Component } from 'react';
import '../../App.css';

class Clock extends Component {
  setTime() {
    var currentdate = new Date();
    var hours = currentdate.getHours();

      // correct for number over 24, and negatives
      if( hours >= 24 ){ hours -= 24; }
      if( hours < 0   ){ hours += 12; }

      // add leading zero, first convert hours to string
      hours = hours + "";
      if( hours.length === 1 ){ hours = "0" + hours; }

      // minutes are the same on every time zone
      var minutes = currentdate.getMinutes();

      // add leading zero, first convert hours to string
      minutes = minutes + "";
      if( minutes.length === 1 ){ minutes = "0" + minutes; }

      var seconds = currentdate.getSeconds();
      if (seconds < 10) seconds = "0" + seconds;
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
    var months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli",
                  "Augusti", "September", "Oktober", "November", "December"];
    month = months[month];

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
