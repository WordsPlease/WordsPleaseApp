import React from 'react';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import { getSetting } from '../actions/setting_actions';
import Header from './Header';

const mapDispatchToProps = (dispatch) => ({
  getSetting: (settingId) => dispatch(getSetting(settingId)),

})

const mapStateToProps = state => ({
  setting: state,
});

export default connect(
  mapStateToProps,mapDispatchToProps)
  (Setting);
