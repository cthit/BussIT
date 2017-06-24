import React, { Component } from 'react';
import '../../App.css';
import addIcon from '../../images/weather-icons/add-icons';


class CurrentWeather extends Component {

  render() {
    const locationName = this.props.location.name;
    const latitude = this.props.data.latitude;
    const longitude = this.props.data.longitude;
    const icon = this.props.currently.icon;
    const temperature = this.props.currently.temperature;
    const summary = this.props.currently.summary;
    const windSpeed = this.props.currently.windSpeed;
    const humidity = this.props.currently.humidity*100;
    
    return (
      <div className="current-weather">
        <div className="main">
          <h2>{locationName}</h2>
          <h6>{latitude},{longitude}</h6>
          <img src={addIcon(icon)} alt="" />
        </div>
        <div className="sidebar">
          <h1>{Math.round(temperature)}°</h1>
          <h4>{summary}</h4>
          <h5>Vindhastighet: {windSpeed} m/s</h5>
          <h5>Luftfuktighet: {humidity}%</h5>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
