import React, { Component } from 'react';
import '../App.css';
import Vasttrafik from '../components/vasttrafik/widget';
import Clock from '../components/clock/widget';
import Twitter from '../components/twitter/widget';
import Weather from '../components/weather/widget';

class Home extends Component {
  render() {
    const API = 'http://localhost:5000';
    return (
      <div>
        <Twitter url={API} />
        <Vasttrafik url={API} />
        <Weather url={API} />
        <Clock />
      </div>
    );
  }
}

export default Home;
