export const fetchStarters = () => {
  return (
    fetch(`https://words-please.herokuapp.com/api/starters/`, {
      method: 'GET'
    })
  )
}

// Will need to change to get specific thing
export const fetchStarter = () => {
  // Need to actually change dramatically
  // return (
  //   fetch(`https://words-please.herokuapp.com/api/starters/`, {
  //     method: 'GET'
  //   })
  // )
}
