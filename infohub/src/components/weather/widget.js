import React, { Component } from 'react';
import '../../App.css';
import CurrentWeather from './current-weather';
import HourlyWeather from './hourly-weather';
let request = require('superagent');

// location format: [latitude],[longitude]
const location =
  {
    name: 'Göteborg',
    coordinates: '57.696994,11.9865'
  };

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      currently: {},
      hourlyData: []
    }
  }

  fetchData() {
    request
      .get(this.props.url + '/darksky/' + location.coordinates)
      .accept('json')
      .end( (err, res) => {
        if (res) {
          res = JSON.parse(res.text);
          this.setState({
            data: res,
            currently: res.currently,
            hourlyData: res.hourly.data
          });
        } else this.fetchData();
      });
  }

  componentWillMount() {
    this.fetchData();
  }

  componentDidMount() {
     window.setInterval(function() {
      this.fetchData();
    }.bind(this), 3600000);
  }

  render() {
    return (
      <div className="widget weather">
        <CurrentWeather location={location} data={this.state.data} currently={this.state.currently} />
        <HourlyWeather data={this.state.hourlyData} />
        <a id="darksky-link" href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
      </div>
    );
  }
}

export default Weather;
