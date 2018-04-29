import React, {Component} from 'react';
import ReactNative, { TouchableOpacity, Text } from 'react-native';

class ToggleSetting extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.changeSetting}
        style={styles}>
        <Text>ToggleSetting</Text>
      </TouchableOpacity>
    )
  }
}

export default ToggleSetting;

const styles = {
  width: 100,
  height: 40,
  backgroundColor: '#FBFCFC',
  borderWidth: 1,
  borderRadius: 2,
  borderColor: '#17202A',
  paddingTop: 10
}
