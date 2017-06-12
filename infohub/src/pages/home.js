import React, { Component } from 'react';
import '../App.css';
import Vasttrafik from '../components/vasttrafik/widget';
import Clock from '../components/clock/widget';

class Home extends Component {
  render() {
    return (
      <div>
        <Vasttrafik />
        <Clock UTCOffset="2" />
      </div>
    );
  }
}

export default Home;
