import React, { Component } from 'react';
import { View } from 'react-native';

class ActiveTiles extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  render() {
    console.log(this.props)
    return (
      <View style={{flex: 2, flexDirection: 'row', backgroundColor: '#3498DB'}}>
      </View>
    )
  }
}

export default ActiveTiles;
