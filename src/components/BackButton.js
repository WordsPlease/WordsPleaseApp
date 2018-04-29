import React, {Component} from 'react';
import ReactNative, { TouchableOpacity, Text } from 'react-native';

class BackButton extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity style={styles} onPress={this.props.onPressHandler}>
        <Text>Back</Text>
      </TouchableOpacity>
    )
  }
}

export default BackButton;

const styles = {
  width: 40,
  height: 40,
  backgroundColor: '#FBFCFC',
  borderWidth: 1,
  borderRadius: 2,
  borderColor: '#17202A',
  paddingTop: 10
}
