import React, { Component } from 'react';
import '../../App.css';
import Header from './header';
import DepartureItem from './departure-item'

class Vasttrafik extends Component {
  render() {
    const data = {
      line: 52,
      destination: "Linnéplatsen",
      departure: "3 min",
      nextDeparture: "13 min"
    };
    function elms(nrOfItems) {
      return Array.from(Array(nrOfItems).keys()).map( i => <DepartureItem data={data} />);
    }
    return (
      <div className="widget vasttrafik">
        <Header busStop="Mossen" />
        <ul>
          {elms(2)}
        </ul>
        <Header busStop="Pilbågsgatan" />
        <ul>
          {elms(5)}
        </ul>
      </div>
    );
  }
}

export default Vasttrafik;
