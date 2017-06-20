import React, { Component } from 'react';
import '../../App.css';
import Header from './header'
import DepartureItem from './departure-item'
var request = require('superagent');
let jsonp = require('superagent-jsonp');

class BusStop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: {}
    }
  }

  addDepartureItem() {
    if (this.state.result.Departure) {
      return this.state.result.Departure.map( (e, i) => <DepartureItem key={i} data={e} />);
    }
  }

  fetchData() {
    request
      .get(this.props.url + '/vasttrafik/' + this.props.data.id)
      .use(jsonp)
      .end(function(err, res){
        console.log(res);
        if (res) {
          this.update(res)
        }
  });
  }

  update(result) {
    this.setState({
      result: result
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
