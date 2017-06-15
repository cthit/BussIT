import React, { Component } from 'react';
import '../App.css';
import Vasttrafik from '../components/vasttrafik/widget';
import Clock from '../components/clock/widget';
import Instagram from '../components/instagram/widget';
import Weather from '../components/weather/widget';

class Home extends Component {
  render() {
    return (
      <div>
        <Instagram />
        <Vasttrafik />
        <Weather />
        <Clock />
      </div>
    );
  }
}

export default Home;