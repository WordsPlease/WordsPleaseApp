export const fetchStarters = () => {
  return (
    fetch(`https://words-please.herokuapp.com/api/starters`, {
      method: 'GET'
    })
  );
};

export const fetchStarter = (starterId) => {
  return (
    fetch(`https://words-please.herokuapp.com/api/starters/${starterId}`, {
      method: 'GET'
    })
  );
};