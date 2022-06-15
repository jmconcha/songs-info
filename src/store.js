import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';

function songsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_SONG':
      return [ ...state, { ...action.payload }];
    default:
      return state;
  }
}

function rootReducer(state, action) {
  switch (action.type) {
    case 'ADD_SONG':
      return {
        songs: songsReducer(state.songs, action),
      };
    default:
      return state;
  }
}

const preloadedState = {};
const middlewares = [logger];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancer = composeWithDevTools(...enhancers);
const store = createStore(rootReducer, preloadedState, composedEnhancer);

export const { dispatch, getState, subscribe } = store;

export default store;