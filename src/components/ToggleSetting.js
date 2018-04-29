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
  width: 'auto',
  height: 'auto',
  backgroundColor: 'lightgrey',
  borderWidth: 1,
  borderRadius: 2,
  borderColor: '#17202A',
  marginTop: 10,
  marginRight: 10,
  justifyContent: 'center'
}
