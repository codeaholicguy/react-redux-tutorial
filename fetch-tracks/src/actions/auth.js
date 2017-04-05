import SoundCloud from 'soundcloud';
import {ActionTypes} from '../core/constants';
import {setTracks} from '../actions/track';

const API_HOST = '//api.soundcloud.com';

export function auth() {
  return (dispatch) => {
    SoundCloud.connect().then((session) => {
      dispatch(fetchMe(session));
      dispatch(fetchTracks(session));
    });
  }
}

function fetchMe(session) {
  return (dispatch) => {
    fetch(`${API_HOST}/me?oauth_token=${session.oauth_token}`)
      .then((res) => res.json())
      .then((user) => {
        dispatch(setMe(user));
      });
  }
}

function setMe(user) {
  return {type: ActionTypes.ME_SET, user}
}

function fetchTracks(session) {
  return (dispatch) => {
    fetch(`${API_HOST}/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setTracks(data.collection));
      });
  }
}
