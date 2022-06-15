import { ADD_SONG, SELECT_SONG } from './types';

export function addSong(payload) {
  return {
    type: ADD_SONG,
    payload,
  };
}

export function selectSong(payload) {
  return {
    type: SELECT_SONG,
    payload,
  };
}