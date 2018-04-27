import { RECEIVE_STARTERS } from '../actions/starter_actions.js';
// import {
//   RECEIVE_MIDDLES
// } from '../actions/middle_actions.js';
// import {
//   RECEIVE_FINISHERS
// } from '../actions/finisher_actions.js';

const TileReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_STARTERS:
      return action.tiles;
    // case RECEIVE_MIDDLES:
    //   return action.tiles;
    // case RECEIVE_FINISHERS:
    //   return action.tiles;
    default:
      return state;
  }
};

export default TileReducer;
