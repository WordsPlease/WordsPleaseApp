import * as SettingUtil from '../util/setting_api_util';

export const RECEIVE_SETTING = 'RECEIVE_SETTING'

export const receiveSetting = (setting) => ({
  type: RECEIVE_SETTING,
  setting
})

export const fetchSetting = (id) => dispatch => (
  SettingUtil.fetchSetting(id).then(event => dispatch(receiveSetting(event))
))
