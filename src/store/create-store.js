/* eslint fp/no-unused-expression: 1 */
import { applyMiddleware, createStore, compose } from 'redux';
import { createCycleMiddleware } from 'redux-cycles';
import { run } from '@cycle/run';
import { makeHTTPDriver } from '@cycle/http';
import { timeDriver } from '@cycle/time';
import logger from 'redux-logger';

// combined all the reducers in the application
import reducers from './reducers';
// combined all the cycles in the application
import cycles from './cycles';

// create cycle middleware to attach to redux store.
const cycleMiddleware = createCycleMiddleware();
const { makeActionDriver, makeStateDriver } = cycleMiddleware;

// we might use multiple middleware, here i used a logger
// and cycle. We can add more middleware by adding them to
// the below array.
const middleWare = [
  logger,
  cycleMiddleware,
];

const initState = {};

// more about compose here http://redux.js.org/docs/api/compose.html
let composeEnhancers = compose;// eslint-disable-line

// adding redux dev tool to visualize the store state.
// should be enabled only in development.
if (process.env.NODE_ENV !== 'production') { // eslint-disable-line
  const composeWithDevToolsExtension =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line no-underscore-dangle
  if (typeof composeWithDevToolsExtension === 'function') { // eslint-disable-line
    composeEnhancers = composeWithDevToolsExtension; // eslint-disable-line
  }
}

const store = createStore(
    reducers, // all the available reducers combined
    initState, // initial state of the reducers
    composeEnhancers(
     applyMiddleware(...middleWare), // attaching the middleware
    ),
  );

// calling run of cycle we are activating the cycles that we created
// here all the different cycles are combined to one.
run(cycles, {
  ACTION: makeActionDriver(),
  STATE: makeStateDriver(),
  Time: timeDriver,
  HTTP: makeHTTPDriver(),
});

export default store;
