import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';

import rootReducer from './reducers';

const preloadedState = {
  songs: [],
  selectedSong: null,
};
const middlewares = [logger];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancer = composeWithDevTools(...enhancers);
const store = createStore(rootReducer, preloadedState, composedEnhancer);

export default store;