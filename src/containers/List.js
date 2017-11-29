import React, { Component } from 'react'
import { render } from 'react-dom'

const API = process.env.REACT_APP_API_URL;

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
