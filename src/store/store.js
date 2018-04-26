import { createStore, applyMiddleware } from 'redux';
import SettingReducer from '../reducers/setting_reducers'
import thunk from 'redux-thunk';

const store = (preloadedState = {}) => createStore(
  SettingReducer,
  preloadedState,
  applyMiddleware(thunk));

export default store();
