import { combineReducers } from 'redux';

import setting from './setting_reducers';
import tiles from './tile_reducer';

const rootReducer = combineReducers({
  setting,
  tiles,
});

export default rootReducer;
