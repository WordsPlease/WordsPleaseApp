export const fetchFinishers = (middleId, settingId) => {
  return (
    fetch(`https://words-please.herokuapp.com/api/middles?starter_id=${starterId}`, {
      method: 'GET'
    })
  )
}

// Will need to change to get specific thing
export const fetchFinisher = () => {
  // Need to actually change dramatically
  // return (
  //   fetch(`https://words-please.herokuapp.com/api/starters/`, {
  //     method: 'GET'
  //   })
  // )
}
