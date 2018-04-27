import { fetchMiddles, fetchMiddle } from '../util/middle_api_util';

export const RECEIVE_MIDDLE = 'RECEIVE_MIDDLE';
export const RECEIVE_MIDDLES = 'RECEIVE_MIDDLES';

// might need to change starter to more descriptive variable when implememting sentence
// const receiveStarter = (starter) => ({
  // type: RECEIVE_STARTER,
  // active.starter: starter
// });

const receiveMiddles = (tiles) => ({
  type: RECEIVE_MIDDLES,
  tiles: tiles
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

export const getMiddles = (starterId) => dispatch => (
  fetchMiddles(starterId).then(
    async function(response) {
      let json = await response.json();
      dispatch(receiveMiddles(json))
    }
  )
)
