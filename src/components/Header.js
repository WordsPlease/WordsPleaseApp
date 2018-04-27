import React, { Component } from 'react';
import { View } from 'react-native';
import ActiveTiles from './ActiveTiles'

class Header extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {

  }

  render() {
    console.log(this.props)
    return (
      <View style={{flex: 2, flexDirection: 'row'}}>
        <ActiveTiles style={{flex: 2, backgroundColor: '#3498DB'}}
          activeTileState={this.props.activeTileState} />
        <View style={{flex: 1, backgroundColor: '#ddd'}} />
      </View>
    )
  }
}

export default Header;
