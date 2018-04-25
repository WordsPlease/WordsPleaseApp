

export default const fetchSetting = (settingId) => fetch('http://localhost:3000/api/settings', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    setting_id: 'settingId',
  }),
});
