import React, { Component } from 'react';
import '../../App.css';
import addIcon from '../../images/weather-icons/add-icons';


class CurrentWeather extends Component {

  render() {
    return (
      <div className="current-weather">
        <div className="main">
          <h2>{this.props.location.name}</h2>
          <h6>{this.props.data.latitude},{this.props.data.longitude}</h6>
          <img src={addIcon(this.props.currently.icon)} alt="" />
        </div>
        <div className="sidebar">
          <h1>{Math.round(this.props.currently.temperature)}°</h1>
          <h4>{this.props.currently.summary}</h4>
          <h5>Vindhastighet: {this.props.currently.windSpeed} m/s</h5>
          <h5>Luftfuktighet: {this.props.currently.humidity*100}%</h5>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
