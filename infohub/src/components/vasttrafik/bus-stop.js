import React, { Component } from 'react';
import '../../App.css';
import Header from './header'
import DepartureItem from './departure-item'

class BusStop extends Component {
  render() {
    const data = {
      line: 52,
      destination: "Linnéplatsen",
      departure: "3 min",
      nextDeparture: "13 min"
    };
    function elms(nrOfItems) {
      return Array.from(Array(nrOfItems).keys()).map( (e, i) => <DepartureItem key={i} data={data} />);
    }
    return (
      <div>
        <Header busStop={this.props.data.name} />
        <ul>
          {elms(3)}
        </ul>
      </div>
    );
  }
}

export default BusStop;
