/* eslint fp/no-unused-expression: 1 */
import { applyMiddleware, createStore, compose } from 'redux';
import { createCycleMiddleware } from 'redux-cycles';
import { run } from '@cycle/run';
import { makeHTTPDriver } from '@cycle/http';
import { timeDriver } from '@cycle/time';
import logger from 'redux-logger';

import reducers from './reducers';
import cycles from './cycles';


const cycleMiddleware = createCycleMiddleware();
const { makeActionDriver, makeStateDriver } = cycleMiddleware;

const middleWare = [
  logger,
  cycleMiddleware,
];

const initState = {};

let composeEnhancers = compose;// eslint-disable-line

if (process.env.NODE_ENV !== 'production') { // eslint-disable-line
  const composeWithDevToolsExtension =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line no-underscore-dangle
  if (typeof composeWithDevToolsExtension === 'function') { // eslint-disable-line
    composeEnhancers = composeWithDevToolsExtension; // eslint-disable-line
  }
}

const store = createStore(
    reducers,
    initState,
    composeEnhancers(
     applyMiddleware(...middleWare),
    ),
  );

run(cycles, {
  ACTION: makeActionDriver(),
  STATE: makeStateDriver(),
  Time: timeDriver,
  HTTP: makeHTTPDriver(),
});

export default store;
