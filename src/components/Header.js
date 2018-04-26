import React from 'react';
import { View } from 'react-native';

const Header = (props) => {
  return (
    <View style={{flex: 2, flexDirection: 'row'}}>
      <View style={{flex: 2, backgroundColor: '#3498DB'}} />
      <View style={{flex: 1, backgroundColor: '#EC7063'}} />
    </View>
  )
}

// <View style={{flex: 1, backgroundColor: '#F8C471'}} />
export default Header;
