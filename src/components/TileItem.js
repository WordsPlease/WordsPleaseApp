import React from 'react';
import { Text, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';

const TileItem = (props) => {
  return (
    <TouchableOpacity style={[styles.containerStyle, props.style]} key={props.innerKey}
      onPress={(e) => {
        props.setTile(props.item, e)
        Tts.speak(props.item.title, { iosVoiceId: 'com.apple.ttsbundle.Samantha-compact' })
      }}>
      <Image source={{uri: props.item.image_path}} style={{width: 40, height: 40}}/>
      <Text>{props.item.title}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    backgroundColor: '#ebe3c8',
    elevation: 1,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  }
}

// const styles = {
//   displayDetail: {
//     flexDirection: 'column',
//     justifyContent: 'space-around'
//   }
// }

export default TileItem;
