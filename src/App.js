import React, { Component } from 'react';
import {Provider} from 'react-redux';
//import {HashRouter, Route, Switch} from 'react-router-dom';
import createStore from './lib/store.js';
import Game from './game';
import Login from './login';
import './App.scss';

const store = createStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
        <Login/>
        <Game/>
        </Provider>
      </div>
    );
  }
}

export default App;
