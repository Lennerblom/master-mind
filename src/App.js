import React, { Component } from 'react';
import Game from './game';
//import Login from './login';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login/> */}
        <Game/>
      </div>
    );
  }
}

export default App;
