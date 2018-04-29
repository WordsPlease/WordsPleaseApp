import React, { Component } from 'react';
import { Image } from 'react-native';
import ActiveTiles from './ActiveTiles';

const SettingImage = (props) => {

// console.log(props.bg);
  let bgImg = null
  if (props.bg) {
    bgImg =
    <Image style={{flex:1, resizeMode: 'center'}} source={{uri: props.bg}} />
  }

  return (
    bgImg
  )
}

export default SettingImage
