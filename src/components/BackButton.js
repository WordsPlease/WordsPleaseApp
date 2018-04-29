import React, {Component} from 'react';
import ReactNative, { TouchableOpacity, Text } from 'react-native';

class BackButton extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPressHandler}>
        <Text>Back</Text>
      </TouchableOpacity>
    )
  }
}

export default BackButton;
