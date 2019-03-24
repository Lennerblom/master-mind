import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route, Switch, Link} from 'react-router-dom';
import createStore from './lib/store.js';
import Dashboard from './dashboard';
import Instructions from './instructions';
import Game from './game';
import Login from './login';
import './App.scss';

const store = createStore();

class App extends Component {
  render() {
    return (
      <div className="App">

        <Provider store={store}>
        <HashRouter>
        <nav>
            <ul>
            <li className="nav-li"><Link to="/">home</Link></li>
                  <li className="nav-li"><Link to="/instructions">How To Play</Link></li>
              {/* <li className="nav-li"><a href="/#/login">login</a></li> */}
            </ul>
          </nav>
                  <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/game" component={Game}/>
                    <Route exact path="/instructions" component={Instructions}/>
                    <Route exact path="/login" component={Login}/>
                  </Switch>
              </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
