import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
