import React, { Component } from 'react';
import '../../App.css';
import Header from './header';
import DepartureItem from './departure-item'

class Widget extends Component {
  render() {
    var elms = Array.from(Array(5).keys()).map( i => <DepartureItem />);
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

export default Widget;
