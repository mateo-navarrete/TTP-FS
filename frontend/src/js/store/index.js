import { applyMiddleware, createStore, compose } from 'redux';
// import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';

// const logger = createLogger({ collapsed: true });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))

  // composeEnhancers(applyMiddleware(thunk, logger))
);
