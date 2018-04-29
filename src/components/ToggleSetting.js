import React, {Component} from 'react';
import ReactNative, { TouchableOpacity, Text } from 'react-native';

class ToggleSetting extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.changeSetting}>
        <Text>ToggleSetting</Text>
      </TouchableOpacity>
    )
  }
}

export default ToggleSetting;
