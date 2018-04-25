import React, { Component } from 'react';
import ReactNative, {
  Text,
  View,
} from 'react-native';
import TestData from './TestData';

class DisplayIndex extends Component {
  state = { list: [] };

  componentWillMount() {
    this.setState({list: TestData})
  }

  renderList() {
    return this.state.list.map(item =>
      <DisplayDetail key={item.id} item={item} />
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#F7DC6F'}} />
        <View style ={{flex: 1, backgroundColor: '#82E0AA'}} />
      </View>
    )
  }
  // {this.renderList()}

}

export default DisplayIndex;
