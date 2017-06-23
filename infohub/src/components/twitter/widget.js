import React, { Component } from 'react';
import '../../App.css';
let request = require('superagent');

const user = 'EmrgencyKittens';

class Twitter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      image: '',
      count: 0
    }
  }

  fetchData() {
    request
      .get(this.props.url + '/twitter/' + user)
      .accept('json')
      .end( (err, res) => {
        if (res) {
          res = JSON.parse(res.text);
          this.setState({
            images: res.images,
            image: res.images[0],
            count: 1
          });
        } else this.fetchData();
      });
  }

  componentWillMount() {
    this.fetchData();
  }

  componentDidMount() {
    window.setInterval(function() {
      let count = this.state.count;
      let images = this.state.images;
      this.setState({
        image: images[count],
        count: count < images.length - 1 ? count+1 : 0
      });
      if (count === 0) {
        this.fetchData();
      }
    }.bind(this), 10000);
  }

  render() {
    return (
      <div className="widget twitter">
        <img src={this.state.image} alt="" />
        <h3>@{user}</h3>
      </div>
    );
  }
}

export default Twitter;
