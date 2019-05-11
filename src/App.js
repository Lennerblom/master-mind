import React, { Component } from 'react';
//import {Provider} from 'react-redux';
import {HashRouter, Route, Switch, Link} from 'react-router-dom';
//import createStore from './lib/store.js';
import Dashboard from './dashboard';
import Instructions from './instructions';
import Game from './game';
//import LoadingScreen from './loadingScreen';
import './App.scss';

//const store = createStore();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {isLoading: true};
  }

  // componentDidMount(){
  //   this.setState({isLoading: false});
  // }
  render() {
    return (
      <div className="App">
      {/* 
      {this.state.isloading ? <LoadingScreen/> : } */}

        {/* <Provider store={store}> */}
        <HashRouter>
           <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route exact path="/game" component={Game}/>
              <Route exact path="/instructions" component={Instructions}/>
          </Switch>
        </HashRouter>
        {/* </Provider> */}
      
      </div>
    );
  }
}

export default App;
