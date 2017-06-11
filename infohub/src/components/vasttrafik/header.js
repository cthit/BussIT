import React, { Component } from 'react';
import '../../App.css';

class Header extends Component {
  render() {
    return (
      <li className="vasttrafik-header widget-header">
        <div className="line">Linje</div>
        <div className="destination">Riktning</div>
        <div className="departs">Avgår om</div>
        <div className="next-departure">Nästa tur</div>
      </li>
    );
  }
}

export default Header;
