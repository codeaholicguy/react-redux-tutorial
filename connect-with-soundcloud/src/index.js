import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import SoundCloud from 'soundcloud';
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {configureStore} from './store';
import {CLIENT_ID, REDIRECT_URI} from './config';
import createRoutes from './routes';

SoundCloud.initialize({
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI
})

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
