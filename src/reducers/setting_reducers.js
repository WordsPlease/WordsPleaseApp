import { RECEIVE_SETTING, receiveSetting } from '../actions/setting_actions';

const SettingReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SETTING:
      return action.setting
    default:
      return state
  }
}

export default SettingReducer;
