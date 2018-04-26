// export default const fetchSetting = (settingId) => {
//
// }


const fetchSetting = (settingId) => fetch(`http://words-please.herokuapp.com/api/settings/${settingId}`, {
  method: 'GET'
});

// export default fetchSetting = (settingId) => fetch(`http://192.168.2.88:3000/api/settings/${settingId}`, {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     setting_id: 'settingId',
//   }),
// });

export default fetchSetting
