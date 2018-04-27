import React from 'react';
import { connect } from 'react-redux';
import { getStarters } from '../actions/starter_actions';
// import { getMiddles } from '../actions/middle_actions';
// import { getFinishers } from '../actions/finisher_actions';
import TileIndex from './TileIndex.js'
import selectAllTiles from '../reducers/selectors'

const mapDispatchToProps = (dispatch) => ({
  getStarters: () => dispatch(getStarters()),
  // getMiddles: (starterId) => dispatch(getMiddles(starterId)),
  // getFinishers: (middleId, settingId) => dispatch(getFinishers(middleId, settingId))
})

const mapStateToProps = (state) => ({
  tiles: selectAllTiles(state),
  // activeTiles: state.activeTiles
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TileIndex);
