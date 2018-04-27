import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { getStarters } from '../actions/starter_actions';
import { getMiddles } from '../actions/middle_actions';
import { getFinishers } from '../actions/finisher_actions';
// import Header from './Header';
import TileIndex from './TileIndex.js'

const mapDispatchToProps = (dispatch) => ({
  getStarters: () => dispatch(getStarters()),
  getMiddles: () => dispatch(getMiddles()),
  getFinishers: () => dispatch(getFinishers())
})

const mapStateToProps = state => ({
  tiles: state.tiles
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TileIndex);
