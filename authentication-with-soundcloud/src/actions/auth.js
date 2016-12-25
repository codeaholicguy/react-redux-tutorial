import SoundCloud from 'soundcloud';
import {ActionTypes} from '../core/constants';

const API_HOST = '//api.soundcloud.com';

export function auth() {
  return (dispatch) => {
    SoundCloud.connect().then((session) => {
      dispatch(fetchMe(session));
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
