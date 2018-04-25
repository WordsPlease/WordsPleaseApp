import { createStore } from 'redux';
import SettingReducer from '../reducers/setting_reducers'

const store = createStore(SettingReducer);

export default store;
