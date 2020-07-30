
import reducer from './reducer/index';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

export const store = createStore(
  reducer,
  applyMiddleware(logger)
);