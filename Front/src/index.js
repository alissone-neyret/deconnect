/* eslint-disable */

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-quill/dist/quill.snow.css';

import thunk from 'redux-thunk';

const store = createStore(allReducers, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
