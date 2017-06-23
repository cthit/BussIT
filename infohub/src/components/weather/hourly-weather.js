import React, { Component } from 'react';
import '../../App.css';
import HourlyWeatherItem from './hourly-weather-item';


class HourlyWeather extends Component {

  addItems() {
    if (this.props.data) {
      let data = []
      for (var i = 0; i <= 10 && i < this.props.data.length ; i++) {
          data[i] = this.props.data[i];
      }
      console.log(data);
      return data.map( (e, i) => <HourlyWeatherItem key={i} data={e} /> );
    }
  }

  render() {
    return (
      <div className="hourly-weather">
        {this.addItems()}
      </div>
    );
  }
}

export default HourlyWeather;
