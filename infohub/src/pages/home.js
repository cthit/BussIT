import React, { Component } from 'react';
import '../App.css';
import Vasttrafik from '../components/vasttrafik/widget';

class Home extends Component {
  render() {
    return (
      <div>
        <Vasttrafik />
      </div>
    );
  }
}

export default Home;
