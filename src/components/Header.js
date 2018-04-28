import React, { Component } from 'react';
import { View } from 'react-native';
import ActiveTiles from './ActiveTiles'

class Header extends Component {

  componentWillMount(){
    // console.log(this.props.getSetting);
    // console.warn(this.props.getSetting(1));
    this.props.getSetting(1)
    // this.props.fetch();
  }

  render() {

    return(
    <View style={{flex: 2, flexDirection: 'row', backgroundColor: '#ddd'}}>

      <ActiveTiles
        activeTileState={this.props.activeTileState} />
    </View>
  )}
}

export default Header;

// const Header = (props) => {
//   return (
//     <View style={{flex: 2, flexDirection: 'row'}}>
//       <View style={{flex: 1, backgroundColor: '#F8C471'}}>{props.title}</View>
//       <View style={{flex: 1, backgroundColor: '#EC7063'}}>
//         <Image
//           style={{width: 66, height: 58}}
//           source={{uri: {props.image_path}}}
//           />
//       </View>
//       <View style={{flex: 1, backgroundColor: '#3498DB'}} />
//     </View>
//   )
// }

const styles = {
  margin: '20px',
  backgroundColor: '#3498DB',

}
