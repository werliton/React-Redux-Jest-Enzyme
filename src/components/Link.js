import React, { Component } from 'react';

export default class Link extends Component {
  state = {
    text: 'Using enzyme'
  }

  _changeText = () => {
    this.setState(prevState => ({
      text: `${prevState.text} after change`
    }))
  }

  render() {
    return (
      <div>
          <p>
            {this.state.text}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this._changeText}
          >
            Learn React
          </a>
      </div>
    );
  }
}
