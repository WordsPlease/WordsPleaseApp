import React from 'react';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import { fetchSetting, fetch} from '../actions/setting_actions';
import Header from './Header';

const mapDispatchToProps = (dispatch) => ({
  fetchSetting: (settingId) => dispatch(fetchSetting(settingId)),
  fetch: () => dispatch(fetch())
})

const mapStateToProps = state => ({
  setting: state.setting,
});

export default connect(
  mapStateToProps,mapDispatchToProps)
  (Header);
