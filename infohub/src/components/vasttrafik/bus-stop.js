import React, { Component } from 'react';
import '../../App.css';
import Header from './header'
import DepartureItem from './departure-item'
let request = require('superagent');

class BusStop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: []
    }
  }

  addDepartureItem() {
    if (this.state.result.Departure) {
      return this.state.result.map( (e, i) => <DepartureItem key={i} data={e} />);
    }
  }

  fetchData() {
    request
      .get(this.props.url + '/vasttrafik/' + this.props.data.id)
      .accept('json')
      .end(function(err, res){
        if (res) {
          res = JSON.parse(res.text)
          console.log(res.Departure);
          this.update(res.Departure)
        }
  });
  }

  update(response) {
    this.setState({
      result: response
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
        <ul>
          {this.addDepartureItem()}
        </ul>
      </div>
    );
  }
}

export default BusStop;
