import React, { Component } from 'react';
import '../../App.css';
import Header from './header';
import DepartureItem from './departure-item'

class Vasttrafik extends Component {
  render() {
    var elms = Array.from(Array(5).keys()).map( i => <DepartureItem line="52" destination="Linnéplatsen" departure="3 min" nextDeparture="13 min" />);
    return (
      <div className="widget vasttrafik">
        <ul>
          <Header />
          {elms}
        </ul>
      </div>
    );
  }
}

export default Vasttrafik;
