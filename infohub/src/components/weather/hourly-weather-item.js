import React, { Component } from 'react';
import '../../App.css';
import addIcon from '../../images/weather-icons/add-icons';


class HourlyWeatherItem extends Component {

  addIcon(icon) {
    return 'http://icons.iconarchive.com/icons/martz90/circle/72/weather-icon.png';
  }

  getTime(timeString) {
    let time = new Date(timeString*1000).getHours();
    let actualTime = new Date().getHours();
    if (time === actualTime) {
      return 'Nu';
    } else if (time < 10) {
      return '0' + time;
    } else {
      return time;
    }
  }

  render() {
    const time = this.props.data.time;
    const icon = this.props.data.icon;
    const temperature = this.props.data.temperature;
    
    return (
      <div className="hourly-weather-item">
        <h5>{this.getTime(time)}</h5>
        <img src={addIcon(icon)} alt="" />
        <h5>{Math.round(temperature)}°</h5>
      </div>
    );
  }
}

export default HourlyWeatherItem;
