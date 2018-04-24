import React from 'react';
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
        {this.renderList()}
      </View>
    )
  }

}

export default DisplayIndex;
