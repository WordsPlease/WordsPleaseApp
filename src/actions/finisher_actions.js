import { fetchFinishers, fetchFinisher } from '../util/finisher_api_util';

export const RECEIVE_FINISHER = 'RECEIVE_FINISHER';
export const RECEIVE_FINISHERS = 'RECEIVE_FINISHERS';

// might need to change starter to more descriptive variable when implememting sentence
// const receiveStarter = (starter) => ({
  // type: RECEIVE_STARTER,
  // active.starter: starter
// });

const receiveFinishers = (tiles) => ({
  type: RECEIVE_FINISHERS,
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

export const getFinishers = (middleId, settingId) => dispatch => (
  fetchFinishers(middleId, settingId).then(
    async function(response) {
      let json = await response.json();
      dispatch(receiveFinishers(json))
    }
  )
)
