import {ActionTypes} from '../core/constants';

const initialState = {
  tracks: [],
  activeTrack: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.TRACKS_SET:
      return setTracks(state, action);
    case ActionTypes.TRACK_PLAY:
      return setActiveTrack(state, action)
  }

  return state;
}

function setTracks(state, action) {
  const {tracks} = action;
  return {...state, tracks};
}

function setActiveTrack(state, action) {
  const {track} = action;
  return {...state, activeTrack: track};
}
