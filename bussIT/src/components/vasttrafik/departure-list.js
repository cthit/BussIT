import React, { Component } from "react";
import "../../App.css";
import DepartureItem from "./departure-item";

class DepartureList extends Component {
  addDepartureItem() {
    const { data } = this.props;
    if (data) {
      return data.map((e, i) => <DepartureItem key={i} data={e} />);
    }
  }

  render() {
    return (
      <ul className="departure-list">
        {this.addDepartureItem()}
      </ul>
    );
  }
}

export default DepartureList;
