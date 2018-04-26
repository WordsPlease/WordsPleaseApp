import { createStore, applyMiddleware } from 'redux';
import SettingReducer from '../reducers/setting_reducers'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = (preloadedState = {}) => createStore(
  SettingReducer,
  preloadedState,
  applyMiddleware(thunk, logger));

export default store();
