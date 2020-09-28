import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import Dashboard from './components/Dashboard/Dashboard';

// put your reducers here!
const passengers = (state = [], action) => {
  if (action.type === 'SET_PASSENGER') {
    console.log('action.payload:', action.payload);
    return [...state, action.payload];
  }

  return state;
}

const speed = (state = 0, action) => {
  if (action.type === 'increase') {
    return state += 1;
  }

  if (action.type === 'decrease') {
    return state -= 1;
  }
  return state;
}

// be sure to combine your reducers!
const storeInstance = createStore(
  // reducers,
  combineReducers({
    passengers,
    speed
  }),
  applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
