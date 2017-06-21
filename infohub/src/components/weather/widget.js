import React, { Component } from 'react';
import '../../App.css';
let request = require('superagent');

const location =
  {
    name: 'Göteborg',
    coordinates: '57.696994,11.9865'
  };

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: []
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
            result: res
          });
        }
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
        Weather goes here
        <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
      </div>
    );
  }
}

export default Weather;
