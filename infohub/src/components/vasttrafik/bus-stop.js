import React, { Component } from 'react';
import '../../App.css';
import Header from './header';
import DepartureList from './departure-list';
import { API } from '../widget-settings';
let request = require('superagent');

class BusStop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: []
    }
  }

  fetchData() {
    request
      .get(API + '/vasttrafik/' + this.props.data.id)
      .accept('json')
      .end( (err, res) => {
        if (res) {
          res = JSON.parse(res.text);
          this.setState({
            result: res.Departure
          });
        }
      });
  }

  componentWillMount() {
    this.fetchData();
  }

  componentDidMount() {
     window.setInterval(function() {
      this.fetchData();
    }.bind(this), 5000);
  }

  render() {
    const name = this.props.data.name;
    const RESULT = this.state.result;

    return (
      <div>
        <Header busStop={name} />
        <DepartureList data={RESULT} />
      </div>
    );
  }
}

export default BusStop;
