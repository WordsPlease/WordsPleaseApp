import React from 'react';
import { connect } from 'react-redux';
import { getSetting } from '../actions/setting_actions';
import Header from './Header';
import { selectSetting } from '../reducers/selectors'

const mapDispatchToProps = (dispatch) => ({
  getSetting: (settingId) => dispatch(getSetting(settingId)),
})

const mapStateToProps = state => ({
  setting: selectSetting(state),
  tiles: state.tiles
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
