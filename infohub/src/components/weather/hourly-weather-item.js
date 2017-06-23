import React, { Component } from 'react';
import '../../App.css';
import addIcon from '../../images/weather-icons/add-icons';


class HourlyWeatherItem extends Component {

  addIcon(icon) {
    return 'http://icons.iconarchive.com/icons/martz90/circle/72/weather-icon.png';
  }

  getTime(timeString) {
    let time = new Date(timeString);
    return time.getHours() + ':' + time.getMinutes();
  }

  render() {
    return (
      <div className="hourly-weather-item">
        <h5>{this.getTime(this.props.data.time)}</h5>
        <img src={addIcon(this.props.data.icon)} alt="" />
        <h5>{Math.round(this.props.data.temperature)}°</h5>
      </div>
    );
  }
}

export default HourlyWeatherItem;
