import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './user-reducer';

const appReducer = combineReducers({user: userReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));
