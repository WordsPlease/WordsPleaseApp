import React, {Component} from 'react';
import ReactNative, { TouchableOpacity, Text } from 'react-native';

class BackButton extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity style={styles} onPress={this.props.onPressHandler}>
        <Text>Delete</Text>
      </TouchableOpacity>
    )
  }
}

export default BackButton;

const styles = {
  width: 'auto',
  height: '63%',
  // marginTop: 10,
  // marginBottom: 30,
  backgroundColor: 'lightgrey',
  borderWidth: 1,
  borderRadius: 2,
  borderColor: '#17202A',
  marginRight: '25%',
  // alignSelf: 'center',
  // position: 'absolute'
}
