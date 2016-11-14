import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import TrackList from './components/TrackList';
import Callback from './components/Callback';

export default function createRoutes() {
  return (
    <Route path='/' component={App}>
      <IndexRoute component={TrackList} />
      <Route path="/" component={TrackList} />
      <Route path="/callback" component={Callback} />
    </Route>
  )
}
