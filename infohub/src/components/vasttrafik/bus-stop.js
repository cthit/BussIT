import React, { Component } from 'react';
import '../../App.css';
import Header from './header'
import DepartureList from './departure-list'
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
      .get(this.props.url + '/vasttrafik/' + this.props.data.id)
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
    }.bind(this), 10000);
  }

  render() {
    return (
      <div>
        <Header busStop={this.props.data.name} />
        <DepartureList data={this.state.result} />
      </div>
    );
  }
}

export default BusStop;
