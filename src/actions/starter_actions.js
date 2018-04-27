import { fetchStarters, fetchStarter } from '../util/starter_api_util';

export const RECEIVE_STARTER = 'RECEIVE_STARTER';
export const RECEIVE_STARTERS = 'RECEIVE_STARTERS';

// might need to change starter to more descriptive variable when implememting sentence
// const receiveStarter = (starter) => ({
  // type: RECEIVE_STARTER,
  // active.starter: starter
// });

const receiveStarters = (tiles) => ({
  type: RECEIVE_STARTERS,
  tiles
});
//
// export const getStarter = (id) => dispatch => (
//   fetchStarter(id).then(
//     async function(response) {
//       let json = await response.json();
//       dispatch(receiveStarter(json))
//     }
//   )
// )

export const getStarters = () => dispatch => (
  fetchStarters().then(
    async function(response) {
      let json = await response.json();
      dispatch(receiveStarters(json))
    }
  )
)
