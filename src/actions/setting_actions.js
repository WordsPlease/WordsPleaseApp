import { fetchSetting } from '../util/setting_api_util';

export const RECEIVE_SETTING = 'RECEIVE_SETTING'

export const receiveSetting = (setting) => ({
  type: RECEIVE_SETTING,
  setting
})

export const getSetting = (id) => dispatch => (
  fetchSetting(id).then(
  async function(response) {
    // Async version
    let json = await response.json();
    dispatch(receiveSetting(json))
    // .then version
    // setting.json().then(json => dispatch(receiveSetting(json)))
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
