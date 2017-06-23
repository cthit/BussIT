import React, { Component } from 'react';
import '../../App.css';


class CurrentWeather extends Component {

  addIcon(icon) {
    return 'http://icons.iconarchive.com/icons/martz90/circle/72/weather-icon.png';
  }

  render() {
    return (
      <div className="current-weather">
        <div className="main">
          <h2>{this.props.location.name}</h2>
          <h6>{this.props.data.latitude},{this.props.data.longitude}</h6>
          <img src={this.addIcon(this.props.currently.icon)} alt="" />
        </div>
        <div className="sidebar">
          <h1>{Math.round(this.props.currently.temperature)}°</h1>
          <h4>{this.props.currently.summary}</h4>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
