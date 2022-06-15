import { ADD_SONG, SELECT_SONG } from './types';

function addSong(state = [], action) {
  switch (action.type) {
    case ADD_SONG:
      return [ ...state, { ...action.payload }];
    default:
      return state;
  }
}

function selectSong(state = null, action) {
  switch (action.type) {
    case SELECT_SONG:
      return { ...action.payload };
    default:
      return state;
  }
}

function root(state, action) {
  switch (action.type) {
    case ADD_SONG:
      return {
        ...state,
        songs: addSong(state.songs, action),
      };
      case SELECT_SONG:
        return {
          ...state,
          selectedSong: selectSong(state.selectedSong, action),
        };
    default:
      return state;
  }
}

export default root;