import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { getStarters } from '../actions/starter_actions';
// import { getMiddles } from '../actions/middle_actions';
// import { getFinishers } from '../actions/finisher_actions';

import TileIndex from './TileIndex.js'

const mapDispatchToProps = (dispatch) => ({
  getStarters: () => dispatch(getStarters()),
  // getMiddles: (starterId) => dispatch(getMiddles(starterId)),
  // getFinishers: (middleId, settingId) => dispatch(getFinishers(middleId, settingId))
})

const mapStateToProps = state => ({
  tiles: state.tiles,
  // activeTiles: state.activeTiles
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TileIndex);
