import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import tracks from './tracks';
import auth from './auth';

export default combineReducers({
  tracks,
  auth,
  routing: routerReducer
});
