import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import tracks from './tracks';

export default combineReducers({
  tracks,
  routing: routerReducer
});
