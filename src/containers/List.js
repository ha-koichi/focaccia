import React, { Component } from 'react'
import { render } from 'react-dom'

const API = process.env.NODE_API_URL;
// const API = 'http://127.0.0.1:5000/';

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titles: [],
    };
  }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ titles: data.top }));
  }

  render() {
    const { titles } = this.state;
    console.log(API);
    return (
      <div>
        {titles.map(title =>
          <div id={title.game.name} >
            <ul>
              <li>title: {title.game.name}</li>
              <li>viewers: {title.viewers}</li>
              <li><img src={title.game.box.large} /></li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}
