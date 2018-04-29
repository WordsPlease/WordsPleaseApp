import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

const TileItem = (props) => {
  return (
    <TouchableOpacity style={[styles.containerStyle, props.style]} key={props.innerKey}
      onPress={(e) => props.setTile(props.item, e)}>
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
    elevation: 1,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#FBFCFC'
  }
}

// const styles = {
//   displayDetail: {
//     flexDirection: 'column',
//     justifyContent: 'space-around'
//   }
// }

export default TileItem;
