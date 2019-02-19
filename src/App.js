import React, { Component } from 'react';
import Game from './game';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Master Mind</h2>
        <Game/>
      </div>
    );
  }
}

export default App;
