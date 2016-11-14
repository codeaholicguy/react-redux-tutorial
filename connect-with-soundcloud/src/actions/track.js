import {ActionTypes} from '../core/constants';

export function setTracks(tracks) {
  return {
    type: ActionTypes.TRACKS_SET,
    tracks
  };
};
