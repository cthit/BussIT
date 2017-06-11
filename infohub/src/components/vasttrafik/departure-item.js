import React, { Component } from 'react';
import '../../App.css';

class DepartureItem extends Component {
  render() {
    return (
      <li className="widget-list-item">
        <div className="line">Linje</div>
        <div className="destination">Riktning</div>
        <div className="departs">Avgår om</div>
        <div className="next-departure">Nästa tur</div>
      </li>
    );
  }
}

export default DepartureItem;
