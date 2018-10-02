import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Link from './components/Link'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link />
        </header>
      </div>
    );
  }
}

export default App;
