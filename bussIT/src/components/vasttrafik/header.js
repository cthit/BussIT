import React, { Component } from 'react';
import '../../App.css';

class Header extends Component {
  render() {
    const busStop = this.props.busStop;

    return (
      <div className="vasttrafik-header widget-header">
        <h5 className="bus-stop">{busStop}</h5>
        <li>
          <div className="line">Linje</div>
          <div className="destination">Riktning</div>
          <div className="departs">Avgår om</div>
          <div className="next-departure">Nästa tur</div>
        </li>
      </div>
    );
  }
}

export default Header;
