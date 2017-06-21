import React, { Component } from 'react';
import '../../App.css';
import DepartureItem from './departure-item';

class DepartureList extends Component {

  addDepartureItem() {
    if (this.props.data) {
      return this.props.data.map( (e, i) => <DepartureItem key={i} data={e} />);
    }
  }

  render() {
    return (
      <ul>
        {this.addDepartureItem()}
      </ul>
    );
  }
}

export default DepartureList;
