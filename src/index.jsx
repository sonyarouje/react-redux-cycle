/* eslint fp/no-unused-expression: 0 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import store from './store/create-store';
// import reducers from './reducers';
import App from './App';

// const storeEnhancer = window.devToolsExtension ? window.devToolsExtension() : value => value;
// const store = createStore(reducers, storeEnhancer);

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
