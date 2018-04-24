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
      <DisplayItem key={item.id} item={item} />
    )
  }

  render() {
    return (
      <View>
        {this.renderList()}
      </View>
    )
  }

}

export default DisplayIndex;
