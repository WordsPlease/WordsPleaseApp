import React, { Component } from 'react';
import { View } from 'react-native';
import ActiveTiles from './ActiveTiles';

class Header extends Component {

  // this.props.fetchSetting(1)
  componentWillMount(){
<<<<<<< HEAD:src/components/Setting.js
    // this.setState({[]})
=======
    // console.log(this.props.getSetting);
    // console.warn(this.props.getSetting(1));
    this.props.getSetting(1)
    // this.props.fetch();
>>>>>>> master:src/components/Header.js
  }

  render() {

    // console.log(this.props.fetchSetting(1));
<<<<<<< HEAD:src/components/Setting.js
=======
    console.warn(this.props);
>>>>>>> master:src/components/Header.js

    return(
    <View style={{flex: 2, flexDirection: 'row'}}>
      <ActiveTiles style={{flex: 2}} />
      <View style={{flex: 1, backgroundColor: '#EC7063'}} />
    </View>
  )}
}

// <View style={{flex: 1, backgroundColor: '#F8C471'}} />
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
