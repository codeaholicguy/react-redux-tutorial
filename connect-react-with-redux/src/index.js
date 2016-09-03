import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TrackList from './components/TrackList';
import {configureStore} from './store';
import * as actions from './actions';

const tracks = [
  {
    id: 1,
    title: 'Em của ngày hôm qua'
  },
  {
    id: 2,
    title: 'Cơn mưa ngang qua'
  }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Provider store={store}>
    <TrackList />
  </Provider>,
  document.getElementById('app')
);
