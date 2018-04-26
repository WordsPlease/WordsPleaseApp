import React, { Component } from 'react';
import { View } from 'react-native';

class ActiveTiles extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {

  }

  render() {
    return (
      <View style={{flex: 2, backgroundColor: '#3498DB'}}>
      </View>
    )
  }
}

export default ActiveTiles;
