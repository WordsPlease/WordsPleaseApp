import * as SettingUtil from '../util/setting_api_util';

export const RECEIVE_SETTING = 'RECEIVE_SETTING'

export const receiveSetting = (setting) => ({
  type: RECEIVE_SETTING,
  setting
})

export const fetchSetting = (id) => dispatch => (
  SettingUtil.fetchSetting(id).then(setting => {
  dispatch(receiveSetting(setting))
  }
))

export const fetch = {
  type: RECEIVE_SETTING,
  setting: {
    id: 1,
    title: 'classroom',
    image_path: "https://res.cloudinary.com/do2qcwqsc/image/upload/v1523565827/kd6auoy8bzdkwrrcihlp.jpg"
  }
}
