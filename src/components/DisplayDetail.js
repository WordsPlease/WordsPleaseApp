import React from 'react';
import { Text, View } from 'react-native';
import Tile from './Tile';

const DisplayDetail = (props) => {
  return (
    <Tile>
      <View>
        <Text>{props.item.title}</Text>
      </View>
    </Tile>
  )
}

// const styles = {
//   displayDetail: {
//     flexDirection: 'column',
//     justifyContent: 'space-around'
//   }
// }

export default DisplayDetail;
